document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute('href');
            window.location.href = targetPage;
        });
    });
});

function calculateCarbon() {
    const treeCount = document.getElementById('treeCount').value;
    const treeAge = document.getElementById('treeAge').value;
    const treeType = document.getElementById('treeType').value;

    let carbonSequestrationRate;

    // Example sequestration rates (tons of CO2 per tree per year)
    switch (treeType) {
        case 'pine':
            carbonSequestrationRate = 0.5;
            break;
        case 'oak':
            carbonSequestrationRate = 0.6;
            break;
        case 'maple':
            carbonSequestrationRate = 0.4;
            break;
        case 'afzelia_africana':
            carbonSequestrationRate = 0.095;
            break;
        case 'albizia_coriaria':
            carbonSequestrationRate = 0.080;
            break;
        case 'brachystegia_longifolia':
            carbonSequestrationRate = 0.085;
            break;
        case 'combretum_micranthum':
            carbonSequestrationRate = 0.070;
            break;
        case 'daniellia_oliveri':
            carbonSequestrationRate = 0.090;
            break;
        case 'erythrina_senegalensis':
            carbonSequestrationRate = 0.070;
            break;
        case 'faidherbia_albida':
            carbonSequestrationRate = 0.110;
            break;
        case 'grewia_mollis':
            carbonSequestrationRate = 0.080;
            break;
        case 'hymenocardia_acida':
            carbonSequestrationRate = 0.085;
            break;
        case 'kigelia_africana':
            carbonSequestrationRate = 0.085;
            break;
        case 'lannea_acida':
            carbonSequestrationRate = 0.070;
            break;
        case 'milicia_excelsa':
            carbonSequestrationRate = 0.075;
            break;
        case 'pterocarpus_angolensis':
            carbonSequestrationRate = 0.070;
            break;
        case 'sterculia_setigera':
            carbonSequestrationRate = 0.065;
            break;
        case 'terminalia_avicennioides':
            carbonSequestrationRate = 0.080;
            break;
        case 'vitellaria_paradoxa':
            carbonSequestrationRate = 0.090;
            break;
        case 'ximenia_americana':
            carbonSequestrationRate = 0.085;
            break;
        case 'ziziphus_jujuba':
            carbonSequestrationRate = 0.075;
            break;
        case 'baikiaea_plurijuga':
            carbonSequestrationRate = 0.110;
            break;
        case 'boscia_albitrunca':
            carbonSequestrationRate = 0.070;
            break;
        case 'burkea_africana':
            carbonSequestrationRate = 0.085;
            break;
        case 'combretum_collinum':
            carbonSequestrationRate = 0.075;
            break;
        case 'daniellia_thurifera':
            carbonSequestrationRate = 0.090;
            break;
        case 'entandrophragma_angolense':
            carbonSequestrationRate = 0.100;
            break;
        case 'ficus_thonningii':
            carbonSequestrationRate = 0.065;
            break;
        case 'grewia_flavescens':
            carbonSequestrationRate = 0.080;
            break;
        case 'julbernardia_magnistipulata':
            carbonSequestrationRate = 0.095;
            break;
        case 'kigelia_pinnata':
            carbonSequestrationRate = 0.085;
            break;
        case 'lannea_microcarpa':
            carbonSequestrationRate = 0.070;
            break;
        case 'milicia_regia':
            carbonSequestrationRate = 0.075;
            break;
        case 'pterocarpus_soyauxii':
            carbonSequestrationRate = 0.090;
            break;
        case 'sterculia_africana':
            carbonSequestrationRate = 0.065;
            break;
        case 'terminalia_brownii':
            carbonSequestrationRate = 0.080;
            break;
        case 'uapaca_nitida':
            carbonSequestrationRate = 0.095;
            break;
        case 'vitex_madiensis':
            carbonSequestrationRate = 0.085;
            break;
        case 'acacia_xanthophloea':
            carbonSequestrationRate = 0.105;
            break;
        case 'albizia_adianthifolia':
            carbonSequestrationRate = 0.095;
            break;
        case 'anogeissus_latifolia':
            carbonSequestrationRate = 0.080;
            break;
        case 'brachystegia_boehmii':
            carbonSequestrationRate = 0.110;
            break;
        case 'boswellia_sacra':
            carbonSequestrationRate = 0.070;
            break;
        case 'combretum_imberbe':
            carbonSequestrationRate = 0.075;
            break;
        case 'daniellia_oblonga':
            carbonSequestrationRate = 0.090;
            break;
        case 'entandrophragma_caudatum':
            carbonSequestrationRate = 0.100;
            break;
        case 'ficus_sur':
            carbonSequestrationRate = 0.065;
            break;
        case 'grewia_tenax':
            carbonSequestrationRate = 0.080;
            break;
        case 'julbernardia_brieyi':
            carbonSequestrationRate = 0.095;
            break;
        case 'kigelia_africana':
            carbonSequestrationRate = 0.085;
            break;
        case 'lannea_microcarpa':
            carbonSequestrationRate = 0.070;
            break;
        case 'milicia_excelsa':
            carbonSequestrationRate = 0.075;
            break;
        case 'pterocarpus_angolensis':
            carbonSequestrationRate = 0.090;
            break;
        case 'sterculia_africana':
            carbonSequestrationRate = 0.065;
            break;
        case 'terminalia_superba':
            carbonSequestrationRate = 0.080;
            break;
        case 'uapaca_kirkiana':
            carbonSequestrationRate = 0.095;
            break;
        case 'vitex_doniana':
            carbonSequestrationRate = 0.085;
            break;
        case 'ziziphus_abyssinica':
            carbonSequestrationRate = 0.080;
            break;
        case 'friesodielsia_obovate':
            carbonSequestrationRate = 0.075;
            break;
        case 'vangeuriospsis_lanciflora':
            carbonSequestrationRate = 0.085;
            break;
        case 'amla_emlica_officinaliss':
            carbonSequestrationRate = 0.070;
            break;
        case 'albizia_harveyi':
            carbonSequestrationRate = 0.095;
            break;
        case 'combretum_fragrans':
            carbonSequestrationRate = 0.080;
            break;
        case 'pseudolachnostylis_maproneifolia':
            carbonSequestrationRate = 0.085;
            break;
        case 'combretum_adenogonium':
            carbonSequestrationRate = 0.070;
            break;
        case 'hymenocardia_acida':
            carbonSequestrationRate = 0.085;
            break;
        case 'm_piliostigima_thonningii':
            carbonSequestrationRate = 0.090;
            break;
        case 'combretum_apiculatum':
            carbonSequestrationRate = 0.075;
            break;
        case 'srychnos_potatorima':
            carbonSequestrationRate = 0.065;
            break;
        case 'mimusp_zeyheri':
            carbonSequestrationRate = 0.080;
            break;
        case 'brachystegia_longifoliaarkhamia_obstusifolia':
            carbonSequestrationRate = 0.085;
            break;
        default:
            carbonSequestrationRate = 0;
    }

    const totalCarbon = treeCount * treeAge * carbonSequestrationRate;

    document.getElementById('result').innerText = `Total Carbon Sequestration: ${totalCarbon.toFixed(2)} tons of CO2`;
}

/*NEWS*/
document.addEventListener('DOMContentLoaded', function() {
    const newsForm = document.getElementById('news-form');
    const newsContainer = document.getElementById('news-container');

    newsForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        const newsArticle = document.createElement('div');
        newsArticle.classList.add('news-article');

        const newsTitle = document.createElement('h3');
        newsTitle.textContent = title;

        const newsContent = document.createElement('p');
        newsContent.textContent = content;

        newsArticle.appendChild(newsTitle);
        newsArticle.appendChild(newsContent);

        newsContainer.appendChild(newsArticle);

        // Clear the form
        newsForm.reset();
    });
});

