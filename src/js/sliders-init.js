let sliderPrice = document.getElementById('slider-price');
let sliderArea = document.getElementById('slider-area');

noUiSlider.create(sliderPrice, {
    start: [0, 50],
    tooltips: [true, true],
    connect: true,
    format: {
        to: function (value) { // 'to' the formatted value. Receives a number.
            return Math.round(value);// + ' triều';
        },
        from: function (value) { // Receives a string, should return a number - 'from' the formatted value
            return Number(value);//.replace(' triều', ''));
        }
    },
    //keyboardMultiplier: 2, // TODO  adjust for the smooth keyboard control
    range: {
        'min': 0,
        'max': 50
    }
});

noUiSlider.create(sliderArea, {
    start: [100, 1000],
    tooltips: [true, true],
    connect: true,
    format: {
        to: function (value) { // 'to' the formatted value. Receives a number.
            return Math.round(value);// + ' m2';
        },
        from: function (value) { // Receives a string, should return a number - 'from' the formatted value
            return Number(value);//.replace(' m2', ''));
        }
    },
    //keyboardMultiplier: 2, // TODO  adjust for the smooth keyboard control
    range: {
        'min': 100,
        'max': 1000
    }
});

mergeTooltips(sliderPrice, 15, ' - '); // TODO adjust %
mergeTooltips(sliderArea, 15, ' - '); // TODO adjust %


// TODO events handling
sliderPrice.noUiSlider.on('start', function(){
    // alert("started sliding!");
});

/**
 *  Function to merge tooltips (numbers over handles) for values that are too close to each other.
     * @param slider HtmlElement with an initialized slider
     * @param threshold Minimum proximity (in percentages) to merge tooltips
     * @param separator String joining tooltips
     */
function mergeTooltips(slider, threshold, separator) {

    var textIsRtl = getComputedStyle(slider).direction === 'rtl';
    var isRtl = slider.noUiSlider.options.direction === 'rtl';
    var isVertical = slider.noUiSlider.options.orientation === 'vertical';
    var tooltips = slider.noUiSlider.getTooltips();
    var origins = slider.noUiSlider.getOrigins();

    // Move tooltips into the origin element. The default stylesheet handles this.
    tooltips.forEach(function (tooltip, index) {
        if (tooltip) {
            origins[index].appendChild(tooltip);
        }
    });

    slider.noUiSlider.on('update', function (values, handle, unencoded, tap, positions) {

        var pools = [[]];
        var poolPositions = [[]];
        var poolValues = [[]];
        var atPool = 0;

        // Assign the first tooltip to the first pool, if the tooltip is configured
        if (tooltips[0]) {
            pools[0][0] = 0;
            poolPositions[0][0] = positions[0];
            poolValues[0][0] = values[0];
        }

        for (var i = 1; i < positions.length; i++) {
            if (!tooltips[i] || (positions[i] - positions[i - 1]) > threshold) {
                atPool++;
                pools[atPool] = [];
                poolValues[atPool] = [];
                poolPositions[atPool] = [];
            }

            if (tooltips[i]) {
                pools[atPool].push(i);
                poolValues[atPool].push(values[i]);
                poolPositions[atPool].push(positions[i]);
            }
        }

        pools.forEach(function (pool, poolIndex) {
            var handlesInPool = pool.length;

            for (var j = 0; j < handlesInPool; j++) {
                var handleNumber = pool[j];

                if (j === handlesInPool - 1) {
                    var offset = 0;

                    poolPositions[poolIndex].forEach(function (value) {
                        offset += 1000 - value;
                    });

                    var direction = isVertical ? 'bottom' : 'right';
                    var last = isRtl ? 0 : handlesInPool - 1;
                    var lastOffset = 1000 - poolPositions[poolIndex][last];
                    offset = (textIsRtl && !isVertical ? 100 : 0) + (offset / handlesInPool) - lastOffset;

                    // Center this tooltip over the affected handles
                    tooltips[handleNumber].innerHTML = poolValues[poolIndex].join(separator);
                    tooltips[handleNumber].style.display = 'block';
                    tooltips[handleNumber].style[direction] = offset + '%';
                } else {
                    // Hide this tooltip
                    tooltips[handleNumber].style.display = 'none';
                }
            }
        });
    });
}