var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CABY_Boundary_1 = new ol.format.GeoJSON();
var features_CABY_Boundary_1 = format_CABY_Boundary_1.readFeatures(json_CABY_Boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CABY_Boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CABY_Boundary_1.addFeatures(features_CABY_Boundary_1);
var lyr_CABY_Boundary_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CABY_Boundary_1, 
                style: style_CABY_Boundary_1,
                interactive: true,
                title: '<img src="styles/legend/CABY_Boundary_1.png" /> CABY_Boundary'
            });
var lyr_LandFire_1_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "LandFire_1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/LandFire_1_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13573115.676591, 4595004.780479, -13308373.044237, 4861449.737327]
                            })
                        });
var lyr_FeasibilityFinal_v1_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "FeasibilityFinal_v1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FeasibilityFinal_v1_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13528468.820161, 4634907.171047, -13356401.650283, 4834897.964282]
                            })
                        });
var format_WUI_Buffer_4 = new ol.format.GeoJSON();
var features_WUI_Buffer_4 = format_WUI_Buffer_4.readFeatures(json_WUI_Buffer_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WUI_Buffer_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WUI_Buffer_4.addFeatures(features_WUI_Buffer_4);
var lyr_WUI_Buffer_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WUI_Buffer_4, 
                style: style_WUI_Buffer_4,
                interactive: true,
                title: '<img src="styles/legend/WUI_Buffer_4.png" /> WUI_Buffer'
            });
var format_FireHist_Project_5 = new ol.format.GeoJSON();
var features_FireHist_Project_5 = format_FireHist_Project_5.readFeatures(json_FireHist_Project_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FireHist_Project_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FireHist_Project_5.addFeatures(features_FireHist_Project_5);
var lyr_FireHist_Project_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FireHist_Project_5, 
                style: style_FireHist_Project_5,
                interactive: true,
                title: '<img src="styles/legend/FireHist_Project_5.png" /> FireHist_Project'
            });
var format_FT_Project_6 = new ol.format.GeoJSON();
var features_FT_Project_6 = format_FT_Project_6.readFeatures(json_FT_Project_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FT_Project_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FT_Project_6.addFeatures(features_FT_Project_6);
var lyr_FT_Project_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FT_Project_6, 
                style: style_FT_Project_6,
                interactive: true,
                title: '<img src="styles/legend/FT_Project_6.png" /> FT_Project'
            });
var format_IRA_Project_7 = new ol.format.GeoJSON();
var features_IRA_Project_7 = format_IRA_Project_7.readFeatures(json_IRA_Project_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IRA_Project_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IRA_Project_7.addFeatures(features_IRA_Project_7);
var lyr_IRA_Project_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IRA_Project_7, 
                style: style_IRA_Project_7,
                interactive: true,
                title: '<img src="styles/legend/IRA_Project_7.png" /> IRA_Project'
            });
var format_Power_Lines_Project_Layer_Bu_8 = new ol.format.GeoJSON();
var features_Power_Lines_Project_Layer_Bu_8 = format_Power_Lines_Project_Layer_Bu_8.readFeatures(json_Power_Lines_Project_Layer_Bu_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Power_Lines_Project_Layer_Bu_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Power_Lines_Project_Layer_Bu_8.addFeatures(features_Power_Lines_Project_Layer_Bu_8);
var lyr_Power_Lines_Project_Layer_Bu_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Power_Lines_Project_Layer_Bu_8, 
                style: style_Power_Lines_Project_Layer_Bu_8,
                interactive: true,
                title: '<img src="styles/legend/Power_Lines_Project_Layer_Bu_8.png" /> Power_Lines_Project_Layer_Bu'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_CABY_Boundary_1.setVisible(true);lyr_LandFire_1_2.setVisible(true);lyr_FeasibilityFinal_v1_3.setVisible(true);lyr_WUI_Buffer_4.setVisible(true);lyr_FireHist_Project_5.setVisible(true);lyr_FT_Project_6.setVisible(true);lyr_IRA_Project_7.setVisible(true);lyr_Power_Lines_Project_Layer_Bu_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CABY_Boundary_1,lyr_LandFire_1_2,lyr_FeasibilityFinal_v1_3,lyr_WUI_Buffer_4,lyr_FireHist_Project_5,lyr_FT_Project_6,lyr_IRA_Project_7,lyr_Power_Lines_Project_Layer_Bu_8];
lyr_CABY_Boundary_1.set('fieldAliases', {'RBNAME': 'RBNAME', 'Cnt_RBNAME': 'Cnt_RBNAME', 'Min_ACRES': 'Min_ACRES', 'Max_ACRES': 'Max_ACRES', 'Ave_ACRES': 'Ave_ACRES', 'Sum_ACRES': 'Sum_ACRES', 'SD_ACRES': 'SD_ACRES', 'Var_ACRES': 'Var_ACRES', 'Perimeter': 'Perimeter', 'Area': 'Area', 'Acres': 'Acres', 'Hectares': 'Hectares', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_WUI_Buffer_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FireHist_Project_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'YEAR_': 'YEAR_', 'STATE': 'STATE', 'AGENCY': 'AGENCY', 'UNIT_ID': 'UNIT_ID', 'FIRE_NAME': 'FIRE_NAME', 'INC_NUM': 'INC_NUM', 'ALARM_DATE': 'ALARM_DATE', 'CONT_DATE': 'CONT_DATE', 'CAUSE': 'CAUSE', 'COMMENTS': 'COMMENTS', 'REPORT_AC': 'REPORT_AC', 'GIS_ACRES': 'GIS_ACRES', 'C_METHOD': 'C_METHOD', 'OBJECTIVE': 'OBJECTIVE', 'FIRE_NUM': 'FIRE_NUM', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FT_Project_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'SUID': 'SUID', 'ORG': 'ORG', 'ACTIVITY_C': 'ACTIVITY_C', 'ACTIVITY': 'ACTIVITY', 'LOCAL_QUAL': 'LOCAL_QUAL', 'ASU_NBR_UN': 'ASU_NBR_UN', 'ASU_UOM': 'ASU_UOM', 'ADMIN_REGI': 'ADMIN_REGI', 'ADMIN_FORE': 'ADMIN_FORE', 'ADMIN_DIST': 'ADMIN_DIST', 'STATE_ABBR': 'STATE_ABBR', 'OWNERSHIP_': 'OWNERSHIP_', 'PROC_REGIO': 'PROC_REGIO', 'PROC_FORES': 'PROC_FORES', 'LAND_SUITA': 'LAND_SUITA', 'PRODUCTIVI': 'PRODUCTIVI', 'SLOPE': 'SLOPE', 'ELEVATION': 'ELEVATION', 'ASPECT': 'ASPECT', 'MGT_AREA_C': 'MGT_AREA_C', 'MGT_PRESCR': 'MGT_PRESCR', 'NBR_UNITS_': 'NBR_UNITS_', 'NBR_UNIT_1': 'NBR_UNIT_1', 'UOM': 'UOM', 'DATE_PLANN': 'DATE_PLANN', 'DATE_COMPL': 'DATE_COMPL', 'FISCAL_YEA': 'FISCAL_YEA', 'FISCAL_Y_1': 'FISCAL_Y_1', 'FY_PLANNED': 'FY_PLANNED', 'KEYPOINT': 'KEYPOINT', 'FUND_CODE': 'FUND_CODE', 'METHOD_COD': 'METHOD_COD', 'EQUIPMENT_': 'EQUIPMENT_', 'COST_PER_U': 'COST_PER_U', 'NEPA_PROJE': 'NEPA_PROJE', 'NEPA_DOC_N': 'NEPA_DOC_N', 'IMPLEMENTA': 'IMPLEMENTA', 'IMPLEMEN_1': 'IMPLEMEN_1', 'IMPLEMEN_2': 'IMPLEMEN_2', 'ACCOMPLISH': 'ACCOMPLISH', 'ACCOMPLI_1': 'ACCOMPLI_1', 'ACTIVITY_1': 'ACTIVITY_1', 'ACTIVITY_U': 'ACTIVITY_U', 'FACTS_ID': 'FACTS_ID', 'SUBUNIT': 'SUBUNIT', 'FEATURE_TY': 'FEATURE_TY', 'TREATMENT_': 'TREATMENT_', 'ACTIVITY_2': 'ACTIVITY_2', 'ACTIVITY_S': 'ACTIVITY_S', 'WORKFORCE_': 'WORKFORCE_', 'NEPA_PRO_1': 'NEPA_PRO_1', 'SUID_CN': 'SUID_CN', 'ISWUI': 'ISWUI', 'CWPP': 'CWPP', 'CAT_NM': 'CAT_NM', 'EQUIPMENT': 'EQUIPMENT', 'METHOD': 'METHOD', 'TREATMEN_1': 'TREATMEN_1', 'STAGE': 'STAGE', 'STAGE_VALU': 'STAGE_VALU', 'REV_DATE': 'REV_DATE', 'DATA_SOURC': 'DATA_SOURC', 'DATA_SOU_1': 'DATA_SOU_1', 'ACCURACY': 'ACCURACY', 'FS_UNIT_ID': 'FS_UNIT_ID', 'FS_UNIT_NA': 'FS_UNIT_NA', 'CRC_VALUE': 'CRC_VALUE', 'ETL_MODIFI': 'ETL_MODIFI', 'UK': 'UK', 'EDW_INSERT': 'EDW_INSERT', 'UK_HAZ': 'UK_HAZ', 'CRC_HAZ': 'CRC_HAZ', 'ETL_MODI_1': 'ETL_MODI_1', 'GIS_ACRES': 'GIS_ACRES', 'DATE_AWARD': 'DATE_AWARD', 'FY_AWARDED': 'FY_AWARDED', 'PURPOSE_CO': 'PURPOSE_CO', 'ACT_CREATE': 'ACT_CREATE', 'ACT_MODIFI': 'ACT_MODIFI', 'SHAPEAREA': 'SHAPEAREA', 'SHAPELEN': 'SHAPELEN', 'SHAPE_1': 'SHAPE_1', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_IRA_Project_7.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'REGION': 'REGION', 'FOREST': 'FOREST', 'STATE': 'STATE', 'NAME': 'NAME', 'CATEGORY': 'CATEGORY', 'ACRES': 'ACRES', 'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Power_Lines_Project_Layer_Bu_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_CABY_Boundary_1.set('fieldImages', {'RBNAME': 'TextEdit', 'Cnt_RBNAME': 'TextEdit', 'Min_ACRES': 'TextEdit', 'Max_ACRES': 'TextEdit', 'Ave_ACRES': 'TextEdit', 'Sum_ACRES': 'TextEdit', 'SD_ACRES': 'TextEdit', 'Var_ACRES': 'TextEdit', 'Perimeter': 'TextEdit', 'Area': 'TextEdit', 'Acres': 'TextEdit', 'Hectares': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_WUI_Buffer_4.set('fieldImages', {'OBJECTID': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FireHist_Project_5.set('fieldImages', {'OBJECTID': '', 'YEAR_': '', 'STATE': '', 'AGENCY': '', 'UNIT_ID': '', 'FIRE_NAME': '', 'INC_NUM': '', 'ALARM_DATE': '', 'CONT_DATE': '', 'CAUSE': '', 'COMMENTS': '', 'REPORT_AC': '', 'GIS_ACRES': '', 'C_METHOD': '', 'OBJECTIVE': '', 'FIRE_NUM': '', 'Shape_Leng': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_FT_Project_6.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID': '', 'SUID': '', 'ORG': '', 'ACTIVITY_C': '', 'ACTIVITY': '', 'LOCAL_QUAL': '', 'ASU_NBR_UN': '', 'ASU_UOM': '', 'ADMIN_REGI': '', 'ADMIN_FORE': '', 'ADMIN_DIST': '', 'STATE_ABBR': '', 'OWNERSHIP_': '', 'PROC_REGIO': '', 'PROC_FORES': '', 'LAND_SUITA': '', 'PRODUCTIVI': '', 'SLOPE': '', 'ELEVATION': '', 'ASPECT': '', 'MGT_AREA_C': '', 'MGT_PRESCR': '', 'NBR_UNITS_': '', 'NBR_UNIT_1': '', 'UOM': '', 'DATE_PLANN': '', 'DATE_COMPL': '', 'FISCAL_YEA': '', 'FISCAL_Y_1': '', 'FY_PLANNED': '', 'KEYPOINT': '', 'FUND_CODE': '', 'METHOD_COD': '', 'EQUIPMENT_': '', 'COST_PER_U': '', 'NEPA_PROJE': '', 'NEPA_DOC_N': '', 'IMPLEMENTA': '', 'IMPLEMEN_1': '', 'IMPLEMEN_2': '', 'ACCOMPLISH': '', 'ACCOMPLI_1': '', 'ACTIVITY_1': '', 'ACTIVITY_U': '', 'FACTS_ID': '', 'SUBUNIT': '', 'FEATURE_TY': '', 'TREATMENT_': '', 'ACTIVITY_2': '', 'ACTIVITY_S': '', 'WORKFORCE_': '', 'NEPA_PRO_1': '', 'SUID_CN': '', 'ISWUI': '', 'CWPP': '', 'CAT_NM': '', 'EQUIPMENT': '', 'METHOD': '', 'TREATMEN_1': '', 'STAGE': '', 'STAGE_VALU': '', 'REV_DATE': '', 'DATA_SOURC': '', 'DATA_SOU_1': '', 'ACCURACY': '', 'FS_UNIT_ID': '', 'FS_UNIT_NA': '', 'CRC_VALUE': '', 'ETL_MODIFI': '', 'UK': '', 'EDW_INSERT': '', 'UK_HAZ': '', 'CRC_HAZ': '', 'ETL_MODI_1': '', 'GIS_ACRES': '', 'DATE_AWARD': '', 'FY_AWARDED': '', 'PURPOSE_CO': '', 'ACT_CREATE': '', 'ACT_MODIFI': '', 'SHAPEAREA': '', 'SHAPELEN': '', 'SHAPE_1': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_IRA_Project_7.set('fieldImages', {'OBJECTID_1': '', 'REGION': '', 'FOREST': '', 'STATE': '', 'NAME': '', 'CATEGORY': '', 'ACRES': '', 'OBJECTID': '', 'SHAPE_Leng': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_Power_Lines_Project_Layer_Bu_8.set('fieldImages', {'OBJECTID': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_CABY_Boundary_1.set('fieldLabels', {'RBNAME': 'no label', 'Cnt_RBNAME': 'no label', 'Min_ACRES': 'no label', 'Max_ACRES': 'no label', 'Ave_ACRES': 'no label', 'Sum_ACRES': 'no label', 'SD_ACRES': 'no label', 'Var_ACRES': 'no label', 'Perimeter': 'no label', 'Area': 'no label', 'Acres': 'no label', 'Hectares': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_WUI_Buffer_4.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FireHist_Project_5.set('fieldLabels', {'OBJECTID': 'no label', 'YEAR_': 'no label', 'STATE': 'no label', 'AGENCY': 'no label', 'UNIT_ID': 'no label', 'FIRE_NAME': 'no label', 'INC_NUM': 'no label', 'ALARM_DATE': 'no label', 'CONT_DATE': 'no label', 'CAUSE': 'no label', 'COMMENTS': 'no label', 'REPORT_AC': 'no label', 'GIS_ACRES': 'no label', 'C_METHOD': 'no label', 'OBJECTIVE': 'no label', 'FIRE_NUM': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FT_Project_6.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'SUID': 'no label', 'ORG': 'no label', 'ACTIVITY_C': 'no label', 'ACTIVITY': 'no label', 'LOCAL_QUAL': 'no label', 'ASU_NBR_UN': 'no label', 'ASU_UOM': 'no label', 'ADMIN_REGI': 'no label', 'ADMIN_FORE': 'no label', 'ADMIN_DIST': 'no label', 'STATE_ABBR': 'no label', 'OWNERSHIP_': 'no label', 'PROC_REGIO': 'no label', 'PROC_FORES': 'no label', 'LAND_SUITA': 'no label', 'PRODUCTIVI': 'no label', 'SLOPE': 'no label', 'ELEVATION': 'no label', 'ASPECT': 'no label', 'MGT_AREA_C': 'no label', 'MGT_PRESCR': 'no label', 'NBR_UNITS_': 'no label', 'NBR_UNIT_1': 'no label', 'UOM': 'no label', 'DATE_PLANN': 'no label', 'DATE_COMPL': 'no label', 'FISCAL_YEA': 'no label', 'FISCAL_Y_1': 'no label', 'FY_PLANNED': 'no label', 'KEYPOINT': 'no label', 'FUND_CODE': 'no label', 'METHOD_COD': 'no label', 'EQUIPMENT_': 'no label', 'COST_PER_U': 'no label', 'NEPA_PROJE': 'no label', 'NEPA_DOC_N': 'no label', 'IMPLEMENTA': 'no label', 'IMPLEMEN_1': 'no label', 'IMPLEMEN_2': 'no label', 'ACCOMPLISH': 'no label', 'ACCOMPLI_1': 'no label', 'ACTIVITY_1': 'no label', 'ACTIVITY_U': 'no label', 'FACTS_ID': 'no label', 'SUBUNIT': 'no label', 'FEATURE_TY': 'no label', 'TREATMENT_': 'no label', 'ACTIVITY_2': 'no label', 'ACTIVITY_S': 'no label', 'WORKFORCE_': 'no label', 'NEPA_PRO_1': 'no label', 'SUID_CN': 'no label', 'ISWUI': 'no label', 'CWPP': 'no label', 'CAT_NM': 'no label', 'EQUIPMENT': 'no label', 'METHOD': 'no label', 'TREATMEN_1': 'no label', 'STAGE': 'no label', 'STAGE_VALU': 'no label', 'REV_DATE': 'no label', 'DATA_SOURC': 'no label', 'DATA_SOU_1': 'no label', 'ACCURACY': 'no label', 'FS_UNIT_ID': 'no label', 'FS_UNIT_NA': 'no label', 'CRC_VALUE': 'no label', 'ETL_MODIFI': 'no label', 'UK': 'no label', 'EDW_INSERT': 'no label', 'UK_HAZ': 'no label', 'CRC_HAZ': 'no label', 'ETL_MODI_1': 'no label', 'GIS_ACRES': 'no label', 'DATE_AWARD': 'no label', 'FY_AWARDED': 'no label', 'PURPOSE_CO': 'no label', 'ACT_CREATE': 'no label', 'ACT_MODIFI': 'no label', 'SHAPEAREA': 'no label', 'SHAPELEN': 'no label', 'SHAPE_1': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_IRA_Project_7.set('fieldLabels', {'OBJECTID_1': 'no label', 'REGION': 'no label', 'FOREST': 'no label', 'STATE': 'no label', 'NAME': 'no label', 'CATEGORY': 'no label', 'ACRES': 'no label', 'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Power_Lines_Project_Layer_Bu_8.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Power_Lines_Project_Layer_Bu_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});