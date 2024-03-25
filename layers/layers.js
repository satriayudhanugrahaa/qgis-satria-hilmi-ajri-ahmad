var wms_layers = [];

var format_adm_kabkota_fix_geometri_0 = new ol.format.GeoJSON();
var features_adm_kabkota_fix_geometri_0 = format_adm_kabkota_fix_geometri_0.readFeatures(json_adm_kabkota_fix_geometri_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm_kabkota_fix_geometri_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_kabkota_fix_geometri_0.addFeatures(features_adm_kabkota_fix_geometri_0);
var lyr_adm_kabkota_fix_geometri_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_adm_kabkota_fix_geometri_0, 
                style: style_adm_kabkota_fix_geometri_0,
                popuplayertitle: "adm_kabkota_fix_geometri",
                interactive: true,
                title: '<img src="styles/legend/adm_kabkota_fix_geometri_0.png" /> adm_kabkota_fix_geometri'
            });
var format_adm_kabkota_1 = new ol.format.GeoJSON();
var features_adm_kabkota_1 = format_adm_kabkota_1.readFeatures(json_adm_kabkota_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adm_kabkota_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adm_kabkota_1.addFeatures(features_adm_kabkota_1);
var lyr_adm_kabkota_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_adm_kabkota_1, 
                style: style_adm_kabkota_1,
                popuplayertitle: "adm_kabkota",
                interactive: true,
                title: '<img src="styles/legend/adm_kabkota_1.png" /> adm_kabkota'
            });

lyr_adm_kabkota_fix_geometri_0.setVisible(true);lyr_adm_kabkota_1.setVisible(true);
var layersList = [lyr_adm_kabkota_fix_geometri_0,lyr_adm_kabkota_1];
lyr_adm_kabkota_fix_geometri_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'GIS_JM_PST': 'GIS_JM_PST', 'GIS_NM_INS': 'GIS_NM_INS', });
lyr_adm_kabkota_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'LUAS': 'LUAS', 'GIS_JM_PST': 'GIS_JM_PST', 'GIS_NM_INS': 'GIS_NM_INS', });
lyr_adm_kabkota_fix_geometri_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'GIS_JM_PST': 'TextEdit', 'GIS_NM_INS': 'TextEdit', });
lyr_adm_kabkota_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'LUAS': 'TextEdit', 'GIS_JM_PST': 'TextEdit', 'GIS_NM_INS': 'TextEdit', });
lyr_adm_kabkota_fix_geometri_0.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'GIS_JM_PST': 'no label', 'GIS_NM_INS': 'no label', });
lyr_adm_kabkota_1.set('fieldLabels', {'OBJECTID': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'LUAS': 'no label', 'GIS_JM_PST': 'no label', 'GIS_NM_INS': 'no label', });
lyr_adm_kabkota_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});