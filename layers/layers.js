var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_22_1 = new ol.format.GeoJSON();
var features_22_1 = format_22_1.readFeatures(json_22_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_22_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_22_1.addFeatures(features_22_1);
var lyr_22_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_22_1, 
                style: style_22_1,
                popuplayertitle: 'ที่ตั้งหน่วยงานด้านการอนุรักษ์และจัดการต้นน้ำ2 — 2',
                interactive: true,
                title: '<img src="styles/legend/22_1.png" /> ที่ตั้งหน่วยงานด้านการอนุรักษ์และจัดการต้นน้ำ2 — 2'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_22_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_22_1];
lyr_22_1.set('fieldAliases', {'fid': 'fid', 'NO': 'NO', 'OFF_NT': 'OFF_NT', 'OFF_TYPE': 'OFF_TYPE', 'PARO_CODE': 'PARO_CODE', 'PARO_NAME': 'PARO_NAME', 'LONGITUDE': 'LONGITUDE', 'LATITUDE': 'LATITUDE', 'TYPE_TH': 'TYPE_TH', 'NAME_TH': 'NAME_TH', 'TAMBON': 'TAMBON', 'AMPHOE': 'AMPHOE', 'PROVINCE': 'PROVINCE', 'REMARK': 'REMARK', });
lyr_22_1.set('fieldImages', {'fid': '', 'NO': '', 'OFF_NT': '', 'OFF_TYPE': '', 'PARO_CODE': '', 'PARO_NAME': '', 'LONGITUDE': '', 'LATITUDE': '', 'TYPE_TH': '', 'NAME_TH': '', 'TAMBON': '', 'AMPHOE': '', 'PROVINCE': '', 'REMARK': '', });
lyr_22_1.set('fieldLabels', {'fid': 'inline label - always visible', 'NO': 'inline label - always visible', 'OFF_NT': 'inline label - always visible', 'OFF_TYPE': 'inline label - always visible', 'PARO_CODE': 'inline label - always visible', 'PARO_NAME': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'TYPE_TH': 'inline label - always visible', 'NAME_TH': 'inline label - always visible', 'TAMBON': 'inline label - always visible', 'AMPHOE': 'inline label - always visible', 'PROVINCE': 'inline label - always visible', 'REMARK': 'inline label - always visible', });
lyr_22_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});