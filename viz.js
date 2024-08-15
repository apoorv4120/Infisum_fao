document.addEventListener('DOMContentLoaded', function() {
    const regionSelect = document.getElementById('region');
    const countrySelect = document.getElementById('country');
    const productSelect = document.getElementById('product');
    const productDemandSelect = document.getElementById('product-demand');

    // Placeholder event listeners
    regionSelect.addEventListener('change', function() {
        console.log('Region selected:', regionSelect.value);
    });

    countrySelect.addEventListener('change', function() {
        console.log('Country selected:', countrySelect.value);
    });

    productSelect.addEventListener('change', function() {
        console.log('Product selected:', productSelect.value);
    });

    productDemandSelect.addEventListener('change', function() {
        console.log('Product demand selected:', productDemandSelect.value);
    });

    window.addEventListener('resize', adjustRankingHeight);
window.addEventListener('load', adjustRankingHeight);

function adjustRankingHeight() {
    const mapSection = document.querySelector('.controls-map-section');
    const rankingSection = document.querySelector('.product-ranking');

    const mapHeight = mapSection.clientHeight;
    rankingSection.style.height = mapHeight + 'px';
}
});
