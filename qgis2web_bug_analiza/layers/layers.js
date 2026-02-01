var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_CartoDBLightAll_1 = new ol.layer.Tile({
            'title': 'CartoDB Light All',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_vmap_2002_2 = new ol.format.GeoJSON();
var features_vmap_2002_2 = format_vmap_2002_2.readFeatures(json_vmap_2002_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vmap_2002_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vmap_2002_2.addFeatures(features_vmap_2002_2);
var lyr_vmap_2002_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vmap_2002_2, 
                style: style_vmap_2002_2,
                popuplayertitle: 'vmap_2002',
                interactive: false,
                title: '<img src="styles/legend/vmap_2002_2.png" /> vmap_2002'
            });
var format_historyczne_1940_3 = new ol.format.GeoJSON();
var features_historyczne_1940_3 = format_historyczne_1940_3.readFeatures(json_historyczne_1940_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_historyczne_1940_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_historyczne_1940_3.addFeatures(features_historyczne_1940_3);
var lyr_historyczne_1940_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_historyczne_1940_3, 
                style: style_historyczne_1940_3,
                popuplayertitle: 'historyczne_1940',
                interactive: false,
                title: '<img src="styles/legend/historyczne_1940_3.png" /> historyczne_1940'
            });
var format_sentinel_2025_4 = new ol.format.GeoJSON();
var features_sentinel_2025_4 = format_sentinel_2025_4.readFeatures(json_sentinel_2025_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sentinel_2025_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sentinel_2025_4.addFeatures(features_sentinel_2025_4);
var lyr_sentinel_2025_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sentinel_2025_4, 
                style: style_sentinel_2025_4,
                popuplayertitle: 'sentinel_2025',
                interactive: false,
                title: '<img src="styles/legend/sentinel_2025_4.png" /> sentinel_2025'
            });
var format_siatka_A_B_5 = new ol.format.GeoJSON();
var features_siatka_A_B_5 = format_siatka_A_B_5.readFeatures(json_siatka_A_B_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_siatka_A_B_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siatka_A_B_5.addFeatures(features_siatka_A_B_5);
var lyr_siatka_A_B_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_siatka_A_B_5, 
                style: style_siatka_A_B_5,
                popuplayertitle: 'siatka_A_B',
                interactive: false,
    title: 'siatka_A_B<br />\
    <img src="styles/legend/siatka_A_B_5_0.png" /> -72 - -33<br />\
    <img src="styles/legend/siatka_A_B_5_1.png" /> -33 - -6<br />\
    <img src="styles/legend/siatka_A_B_5_2.png" /> -6 - 15<br />\
    <img src="styles/legend/siatka_A_B_5_3.png" /> 15 - 43<br />\
    <img src="styles/legend/siatka_A_B_5_4.png" /> 43 - 100<br />' });

lyr_GoogleSatellite_0.setVisible(false);lyr_CartoDBLightAll_1.setVisible(true);lyr_vmap_2002_2.setVisible(false);lyr_historyczne_1940_3.setVisible(false);lyr_sentinel_2025_4.setVisible(false);lyr_siatka_A_B_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CartoDBLightAll_1,lyr_vmap_2002_2,lyr_historyczne_1940_3,lyr_sentinel_2025_4,lyr_siatka_A_B_5];
lyr_vmap_2002_2.set('fieldAliases', {'DLUG_BRZEG': 'DLUG_BRZEG', 'DLUGOSC': 'DLUGOSC', 'DOKLADNOSC': 'DOKLADNOSC', 'DOSTEPNOSC': 'DOSTEPNOSC', 'GLEBOKOSC': 'GLEBOKOSC', 'ISTNIENIE': 'ISTNIENIE', 'KAT_HYDRO': 'KAT_HYDRO', 'KAT_PLYWU': 'KAT_PLYWU', 'KAT_POJEMN': 'KAT_POJEMN', 'KAT_POLOZ': 'KAT_POLOZ', 'KAT_WODY': 'KAT_WODY', 'NAJW_WYS': 'NAJW_WYS', 'NAZWA': 'NAZWA', 'OBIEKT': 'OBIEKT', 'OPR_UPUST': 'OPR_UPUST', 'OPR_ZBURZ': 'OPR_ZBURZ', 'POCH_HYDRO': 'POCH_HYDRO', 'PRED_PRZEP': 'PRED_PRZEP', 'SREDNIA_GL': 'SREDNIA_GL', 'STAT_EKSPL': 'STAT_EKSPL', 'SZEROKOSC': 'SZEROKOSC', 'TAJNOSC': 'TAJNOSC', 'TYP_AKWED': 'TYP_AKWED', 'TYP_WYBRZ': 'TYP_WYBRZ', 'ZN_ORIENT': 'ZN_ORIENT', 'POWIERZCHN': 'POWIERZCHN', 'ID': 'ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'pow': 'pow', 'obwod': 'obwod', 'wsk_zw': 'wsk_zw', });
lyr_historyczne_1940_3.set('fieldAliases', {'Id': 'Id', 'pow': 'pow', 'obwod': 'obwod', 'wsk_zw': 'wsk_zw', });
lyr_sentinel_2025_4.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'pow': 'pow', 'obwod': 'obwod', 'wsk_zwart': 'wsk_zwart', });
lyr_siatka_A_B_5.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GRID_ID': 'GRID_ID', 'pow_proc_h': 'pow_proc_h', 'pow_proc_v': 'pow_proc_v', 'pow_proc_1': 'pow_proc_1', 'proc_rozn_': 'proc_rozn_', });
lyr_vmap_2002_2.set('fieldImages', {'DLUG_BRZEG': 'TextEdit', 'DLUGOSC': 'TextEdit', 'DOKLADNOSC': 'TextEdit', 'DOSTEPNOSC': 'TextEdit', 'GLEBOKOSC': 'TextEdit', 'ISTNIENIE': 'TextEdit', 'KAT_HYDRO': 'TextEdit', 'KAT_PLYWU': 'TextEdit', 'KAT_POJEMN': 'TextEdit', 'KAT_POLOZ': 'TextEdit', 'KAT_WODY': 'TextEdit', 'NAJW_WYS': 'TextEdit', 'NAZWA': 'TextEdit', 'OBIEKT': 'TextEdit', 'OPR_UPUST': 'TextEdit', 'OPR_ZBURZ': 'TextEdit', 'POCH_HYDRO': 'TextEdit', 'PRED_PRZEP': 'TextEdit', 'SREDNIA_GL': 'TextEdit', 'STAT_EKSPL': 'TextEdit', 'SZEROKOSC': 'TextEdit', 'TAJNOSC': 'TextEdit', 'TYP_AKWED': 'TextEdit', 'TYP_WYBRZ': 'TextEdit', 'ZN_ORIENT': 'TextEdit', 'POWIERZCHN': 'TextEdit', 'ID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'pow': 'TextEdit', 'obwod': 'TextEdit', 'wsk_zw': 'TextEdit', });
lyr_historyczne_1940_3.set('fieldImages', {'Id': 'TextEdit', 'pow': 'TextEdit', 'obwod': 'TextEdit', 'wsk_zw': 'TextEdit', });
lyr_sentinel_2025_4.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'pow': 'TextEdit', 'obwod': 'TextEdit', 'wsk_zwart': 'TextEdit', });
lyr_siatka_A_B_5.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GRID_ID': 'TextEdit', 'pow_proc_h': 'TextEdit', 'pow_proc_v': 'TextEdit', 'pow_proc_1': 'TextEdit', 'proc_rozn_': 'TextEdit', });
lyr_vmap_2002_2.set('fieldLabels', {'DLUG_BRZEG': 'no label', 'DLUGOSC': 'no label', 'DOKLADNOSC': 'no label', 'DOSTEPNOSC': 'no label', 'GLEBOKOSC': 'no label', 'ISTNIENIE': 'no label', 'KAT_HYDRO': 'no label', 'KAT_PLYWU': 'no label', 'KAT_POJEMN': 'no label', 'KAT_POLOZ': 'no label', 'KAT_WODY': 'no label', 'NAJW_WYS': 'no label', 'NAZWA': 'no label', 'OBIEKT': 'no label', 'OPR_UPUST': 'no label', 'OPR_ZBURZ': 'no label', 'POCH_HYDRO': 'no label', 'PRED_PRZEP': 'no label', 'SREDNIA_GL': 'no label', 'STAT_EKSPL': 'no label', 'SZEROKOSC': 'no label', 'TAJNOSC': 'no label', 'TYP_AKWED': 'no label', 'TYP_WYBRZ': 'no label', 'ZN_ORIENT': 'no label', 'POWIERZCHN': 'no label', 'ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'pow': 'no label', 'obwod': 'no label', 'wsk_zw': 'no label', });
lyr_historyczne_1940_3.set('fieldLabels', {'Id': 'no label', 'pow': 'no label', 'obwod': 'no label', 'wsk_zw': 'no label', });
lyr_sentinel_2025_4.set('fieldLabels', {'Id': 'no label', 'gridcode': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'pow': 'no label', 'obwod': 'no label', 'wsk_zwart': 'no label', });
lyr_siatka_A_B_5.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'GRID_ID': 'no label', 'pow_proc_h': 'no label', 'pow_proc_v': 'no label', 'pow_proc_1': 'no label', 'proc_rozn_': 'hidden field', });
lyr_siatka_A_B_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});