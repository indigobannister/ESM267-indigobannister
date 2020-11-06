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
var format_AreaofInterest_1 = new ol.format.GeoJSON();
var features_AreaofInterest_1 = format_AreaofInterest_1.readFeatures(json_AreaofInterest_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaofInterest_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaofInterest_1.addFeatures(features_AreaofInterest_1);
var lyr_AreaofInterest_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AreaofInterest_1, 
                style: style_AreaofInterest_1,
                interactive: false,
                title: '<img src="styles/legend/AreaofInterest_1.png" /> Area of Interest'
            });
var format_WildlandUrbanInterface_2 = new ol.format.GeoJSON();
var features_WildlandUrbanInterface_2 = format_WildlandUrbanInterface_2.readFeatures(json_WildlandUrbanInterface_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WildlandUrbanInterface_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WildlandUrbanInterface_2.addFeatures(features_WildlandUrbanInterface_2);
var lyr_WildlandUrbanInterface_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WildlandUrbanInterface_2, 
                style: style_WildlandUrbanInterface_2,
                interactive: false,
                title: '<img src="styles/legend/WildlandUrbanInterface_2.png" /> Wildland Urban Interface'
            });
var lyr_LandCoverTypesnotSuitableforTreatment_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Land Cover Types not Suitable for Treatment",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/LandCoverTypesnotSuitableforTreatment_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13574201.338681, 4593988.415722, -13307306.144477, 4861451.089750]
                            })
                        });
var format_FireFootprintssince2010_4 = new ol.format.GeoJSON();
var features_FireFootprintssince2010_4 = format_FireFootprintssince2010_4.readFeatures(json_FireFootprintssince2010_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FireFootprintssince2010_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FireFootprintssince2010_4.addFeatures(features_FireFootprintssince2010_4);
var lyr_FireFootprintssince2010_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FireFootprintssince2010_4, 
                style: style_FireFootprintssince2010_4,
                interactive: false,
                title: '<img src="styles/legend/FireFootprintssince2010_4.png" /> Fire Footprints (since 2010)'
            });
var format_FuelTreatmentssince2015_5 = new ol.format.GeoJSON();
var features_FuelTreatmentssince2015_5 = format_FuelTreatmentssince2015_5.readFeatures(json_FuelTreatmentssince2015_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FuelTreatmentssince2015_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FuelTreatmentssince2015_5.addFeatures(features_FuelTreatmentssince2015_5);
var lyr_FuelTreatmentssince2015_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FuelTreatmentssince2015_5, 
                style: style_FuelTreatmentssince2015_5,
                interactive: false,
                title: '<img src="styles/legend/FuelTreatmentssince2015_5.png" /> Fuel Treatments (since 2015)'
            });
var format_RoadlessAreas_6 = new ol.format.GeoJSON();
var features_RoadlessAreas_6 = format_RoadlessAreas_6.readFeatures(json_RoadlessAreas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RoadlessAreas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoadlessAreas_6.addFeatures(features_RoadlessAreas_6);
var lyr_RoadlessAreas_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RoadlessAreas_6, 
                style: style_RoadlessAreas_6,
                interactive: false,
                title: '<img src="styles/legend/RoadlessAreas_6.png" /> Roadless Areas'
            });
var format_HighVoltagePowerLines_7 = new ol.format.GeoJSON();
var features_HighVoltagePowerLines_7 = format_HighVoltagePowerLines_7.readFeatures(json_HighVoltagePowerLines_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HighVoltagePowerLines_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HighVoltagePowerLines_7.addFeatures(features_HighVoltagePowerLines_7);
var lyr_HighVoltagePowerLines_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HighVoltagePowerLines_7, 
                style: style_HighVoltagePowerLines_7,
                interactive: false,
                title: '<img src="styles/legend/HighVoltagePowerLines_7.png" /> High Voltage Power Lines'
            });
var lyr_AreaswherePrescribedFireisnotFeasible_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "Areas where Prescribed Fire is not Feasible",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AreaswherePrescribedFireisnotFeasible_8.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-13528468.820161, 4634907.171047, -13356401.650283, 4834897.964282]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_AreaofInterest_1.setVisible(true);lyr_WildlandUrbanInterface_2.setVisible(true);lyr_LandCoverTypesnotSuitableforTreatment_3.setVisible(true);lyr_FireFootprintssince2010_4.setVisible(true);lyr_FuelTreatmentssince2015_5.setVisible(true);lyr_RoadlessAreas_6.setVisible(true);lyr_HighVoltagePowerLines_7.setVisible(true);lyr_AreaswherePrescribedFireisnotFeasible_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AreaofInterest_1,lyr_WildlandUrbanInterface_2,lyr_LandCoverTypesnotSuitableforTreatment_3,lyr_FireFootprintssince2010_4,lyr_FuelTreatmentssince2015_5,lyr_RoadlessAreas_6,lyr_HighVoltagePowerLines_7,lyr_AreaswherePrescribedFireisnotFeasible_8];
lyr_AreaofInterest_1.set('fieldAliases', {'RBNAME': 'RBNAME', 'Cnt_RBNAME': 'Cnt_RBNAME', 'Min_ACRES': 'Min_ACRES', 'Max_ACRES': 'Max_ACRES', 'Ave_ACRES': 'Ave_ACRES', 'Sum_ACRES': 'Sum_ACRES', 'SD_ACRES': 'SD_ACRES', 'Var_ACRES': 'Var_ACRES', 'Perimeter': 'Perimeter', 'Area': 'Area', 'Acres': 'Acres', 'Hectares': 'Hectares', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_WildlandUrbanInterface_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FireFootprintssince2010_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'YEAR_': 'YEAR_', 'STATE': 'STATE', 'AGENCY': 'AGENCY', 'UNIT_ID': 'UNIT_ID', 'FIRE_NAME': 'FIRE_NAME', 'INC_NUM': 'INC_NUM', 'ALARM_DATE': 'ALARM_DATE', 'CONT_DATE': 'CONT_DATE', 'CAUSE': 'CAUSE', 'COMMENTS': 'COMMENTS', 'REPORT_AC': 'REPORT_AC', 'GIS_ACRES': 'GIS_ACRES', 'C_METHOD': 'C_METHOD', 'OBJECTIVE': 'OBJECTIVE', 'FIRE_NUM': 'FIRE_NUM', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_FuelTreatmentssince2015_5.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'SUID': 'SUID', 'ORG': 'ORG', 'ACTIVITY_C': 'ACTIVITY_C', 'ACTIVITY': 'ACTIVITY', 'LOCAL_QUAL': 'LOCAL_QUAL', 'ASU_NBR_UN': 'ASU_NBR_UN', 'ASU_UOM': 'ASU_UOM', 'ADMIN_REGI': 'ADMIN_REGI', 'ADMIN_FORE': 'ADMIN_FORE', 'ADMIN_DIST': 'ADMIN_DIST', 'STATE_ABBR': 'STATE_ABBR', 'OWNERSHIP_': 'OWNERSHIP_', 'PROC_REGIO': 'PROC_REGIO', 'PROC_FORES': 'PROC_FORES', 'LAND_SUITA': 'LAND_SUITA', 'PRODUCTIVI': 'PRODUCTIVI', 'SLOPE': 'SLOPE', 'ELEVATION': 'ELEVATION', 'ASPECT': 'ASPECT', 'MGT_AREA_C': 'MGT_AREA_C', 'MGT_PRESCR': 'MGT_PRESCR', 'NBR_UNITS_': 'NBR_UNITS_', 'NBR_UNIT_1': 'NBR_UNIT_1', 'UOM': 'UOM', 'DATE_PLANN': 'DATE_PLANN', 'DATE_COMPL': 'DATE_COMPL', 'FISCAL_YEA': 'FISCAL_YEA', 'FISCAL_Y_1': 'FISCAL_Y_1', 'FY_PLANNED': 'FY_PLANNED', 'KEYPOINT': 'KEYPOINT', 'FUND_CODE': 'FUND_CODE', 'METHOD_COD': 'METHOD_COD', 'EQUIPMENT_': 'EQUIPMENT_', 'COST_PER_U': 'COST_PER_U', 'NEPA_PROJE': 'NEPA_PROJE', 'NEPA_DOC_N': 'NEPA_DOC_N', 'IMPLEMENTA': 'IMPLEMENTA', 'IMPLEMEN_1': 'IMPLEMEN_1', 'IMPLEMEN_2': 'IMPLEMEN_2', 'ACCOMPLISH': 'ACCOMPLISH', 'ACCOMPLI_1': 'ACCOMPLI_1', 'ACTIVITY_1': 'ACTIVITY_1', 'ACTIVITY_U': 'ACTIVITY_U', 'FACTS_ID': 'FACTS_ID', 'SUBUNIT': 'SUBUNIT', 'FEATURE_TY': 'FEATURE_TY', 'TREATMENT_': 'TREATMENT_', 'ACTIVITY_2': 'ACTIVITY_2', 'ACTIVITY_S': 'ACTIVITY_S', 'WORKFORCE_': 'WORKFORCE_', 'NEPA_PRO_1': 'NEPA_PRO_1', 'SUID_CN': 'SUID_CN', 'ISWUI': 'ISWUI', 'CWPP': 'CWPP', 'CAT_NM': 'CAT_NM', 'EQUIPMENT': 'EQUIPMENT', 'METHOD': 'METHOD', 'TREATMEN_1': 'TREATMEN_1', 'STAGE': 'STAGE', 'STAGE_VALU': 'STAGE_VALU', 'REV_DATE': 'REV_DATE', 'DATA_SOURC': 'DATA_SOURC', 'DATA_SOU_1': 'DATA_SOU_1', 'ACCURACY': 'ACCURACY', 'FS_UNIT_ID': 'FS_UNIT_ID', 'FS_UNIT_NA': 'FS_UNIT_NA', 'CRC_VALUE': 'CRC_VALUE', 'ETL_MODIFI': 'ETL_MODIFI', 'UK': 'UK', 'EDW_INSERT': 'EDW_INSERT', 'UK_HAZ': 'UK_HAZ', 'CRC_HAZ': 'CRC_HAZ', 'ETL_MODI_1': 'ETL_MODI_1', 'GIS_ACRES': 'GIS_ACRES', 'DATE_AWARD': 'DATE_AWARD', 'FY_AWARDED': 'FY_AWARDED', 'PURPOSE_CO': 'PURPOSE_CO', 'ACT_CREATE': 'ACT_CREATE', 'ACT_MODIFI': 'ACT_MODIFI', 'SHAPEAREA': 'SHAPEAREA', 'SHAPELEN': 'SHAPELEN', 'SHAPE_1': 'SHAPE_1', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_RoadlessAreas_6.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'REGION': 'REGION', 'FOREST': 'FOREST', 'STATE': 'STATE', 'NAME': 'NAME', 'CATEGORY': 'CATEGORY', 'ACRES': 'ACRES', 'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_HighVoltagePowerLines_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_AreaofInterest_1.set('fieldImages', {'RBNAME': 'TextEdit', 'Cnt_RBNAME': 'TextEdit', 'Min_ACRES': 'TextEdit', 'Max_ACRES': 'TextEdit', 'Ave_ACRES': 'TextEdit', 'Sum_ACRES': 'TextEdit', 'SD_ACRES': 'TextEdit', 'Var_ACRES': 'TextEdit', 'Perimeter': 'TextEdit', 'Area': 'TextEdit', 'Acres': 'TextEdit', 'Hectares': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_WildlandUrbanInterface_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_FireFootprintssince2010_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'YEAR_': 'TextEdit', 'STATE': 'TextEdit', 'AGENCY': 'TextEdit', 'UNIT_ID': 'TextEdit', 'FIRE_NAME': 'TextEdit', 'INC_NUM': 'TextEdit', 'ALARM_DATE': 'DateTime', 'CONT_DATE': 'DateTime', 'CAUSE': 'Range', 'COMMENTS': 'TextEdit', 'REPORT_AC': 'TextEdit', 'GIS_ACRES': 'TextEdit', 'C_METHOD': 'Range', 'OBJECTIVE': 'Range', 'FIRE_NUM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_FuelTreatmentssince2015_5.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'Range', 'SUID': 'TextEdit', 'ORG': 'TextEdit', 'ACTIVITY_C': 'TextEdit', 'ACTIVITY': 'TextEdit', 'LOCAL_QUAL': 'TextEdit', 'ASU_NBR_UN': 'TextEdit', 'ASU_UOM': 'TextEdit', 'ADMIN_REGI': 'TextEdit', 'ADMIN_FORE': 'TextEdit', 'ADMIN_DIST': 'TextEdit', 'STATE_ABBR': 'TextEdit', 'OWNERSHIP_': 'TextEdit', 'PROC_REGIO': 'TextEdit', 'PROC_FORES': 'TextEdit', 'LAND_SUITA': 'TextEdit', 'PRODUCTIVI': 'TextEdit', 'SLOPE': 'Range', 'ELEVATION': 'Range', 'ASPECT': 'TextEdit', 'MGT_AREA_C': 'TextEdit', 'MGT_PRESCR': 'TextEdit', 'NBR_UNITS_': 'TextEdit', 'NBR_UNIT_1': 'TextEdit', 'UOM': 'TextEdit', 'DATE_PLANN': 'DateTime', 'DATE_COMPL': 'DateTime', 'FISCAL_YEA': 'Range', 'FISCAL_Y_1': 'Range', 'FY_PLANNED': 'Range', 'KEYPOINT': 'TextEdit', 'FUND_CODE': 'TextEdit', 'METHOD_COD': 'TextEdit', 'EQUIPMENT_': 'TextEdit', 'COST_PER_U': 'TextEdit', 'NEPA_PROJE': 'TextEdit', 'NEPA_DOC_N': 'TextEdit', 'IMPLEMENTA': 'TextEdit', 'IMPLEMEN_1': 'TextEdit', 'IMPLEMEN_2': 'TextEdit', 'ACCOMPLISH': 'TextEdit', 'ACCOMPLI_1': 'TextEdit', 'ACTIVITY_1': 'TextEdit', 'ACTIVITY_U': 'TextEdit', 'FACTS_ID': 'TextEdit', 'SUBUNIT': 'TextEdit', 'FEATURE_TY': 'TextEdit', 'TREATMENT_': 'TextEdit', 'ACTIVITY_2': 'TextEdit', 'ACTIVITY_S': 'TextEdit', 'WORKFORCE_': 'TextEdit', 'NEPA_PRO_1': 'TextEdit', 'SUID_CN': 'TextEdit', 'ISWUI': 'TextEdit', 'CWPP': 'TextEdit', 'CAT_NM': 'TextEdit', 'EQUIPMENT': 'TextEdit', 'METHOD': 'TextEdit', 'TREATMEN_1': 'TextEdit', 'STAGE': 'Range', 'STAGE_VALU': 'TextEdit', 'REV_DATE': 'DateTime', 'DATA_SOURC': 'TextEdit', 'DATA_SOU_1': 'TextEdit', 'ACCURACY': 'Range', 'FS_UNIT_ID': 'TextEdit', 'FS_UNIT_NA': 'TextEdit', 'CRC_VALUE': 'TextEdit', 'ETL_MODIFI': 'TextEdit', 'UK': 'TextEdit', 'EDW_INSERT': 'DateTime', 'UK_HAZ': 'TextEdit', 'CRC_HAZ': 'TextEdit', 'ETL_MODI_1': 'DateTime', 'GIS_ACRES': 'TextEdit', 'DATE_AWARD': 'DateTime', 'FY_AWARDED': 'Range', 'PURPOSE_CO': 'TextEdit', 'ACT_CREATE': 'DateTime', 'ACT_MODIFI': 'DateTime', 'SHAPEAREA': 'TextEdit', 'SHAPELEN': 'TextEdit', 'SHAPE_1': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_RoadlessAreas_6.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'REGION': 'Range', 'FOREST': 'TextEdit', 'STATE': 'TextEdit', 'NAME': 'TextEdit', 'CATEGORY': 'TextEdit', 'ACRES': 'TextEdit', 'OBJECTID': 'Range', 'SHAPE_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HighVoltagePowerLines_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AreaofInterest_1.set('fieldLabels', {'RBNAME': 'no label', 'Cnt_RBNAME': 'no label', 'Min_ACRES': 'no label', 'Max_ACRES': 'no label', 'Ave_ACRES': 'no label', 'Sum_ACRES': 'no label', 'SD_ACRES': 'no label', 'Var_ACRES': 'no label', 'Perimeter': 'no label', 'Area': 'no label', 'Acres': 'no label', 'Hectares': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_WildlandUrbanInterface_2.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FireFootprintssince2010_4.set('fieldLabels', {'OBJECTID': 'no label', 'YEAR_': 'no label', 'STATE': 'no label', 'AGENCY': 'no label', 'UNIT_ID': 'no label', 'FIRE_NAME': 'no label', 'INC_NUM': 'no label', 'ALARM_DATE': 'no label', 'CONT_DATE': 'no label', 'CAUSE': 'no label', 'COMMENTS': 'no label', 'REPORT_AC': 'no label', 'GIS_ACRES': 'no label', 'C_METHOD': 'no label', 'OBJECTIVE': 'no label', 'FIRE_NUM': 'no label', 'Shape_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_FuelTreatmentssince2015_5.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'header label', 'SUID': 'no label', 'ORG': 'no label', 'ACTIVITY_C': 'no label', 'ACTIVITY': 'no label', 'LOCAL_QUAL': 'no label', 'ASU_NBR_UN': 'no label', 'ASU_UOM': 'no label', 'ADMIN_REGI': 'no label', 'ADMIN_FORE': 'no label', 'ADMIN_DIST': 'no label', 'STATE_ABBR': 'no label', 'OWNERSHIP_': 'no label', 'PROC_REGIO': 'no label', 'PROC_FORES': 'no label', 'LAND_SUITA': 'no label', 'PRODUCTIVI': 'no label', 'SLOPE': 'no label', 'ELEVATION': 'no label', 'ASPECT': 'no label', 'MGT_AREA_C': 'no label', 'MGT_PRESCR': 'no label', 'NBR_UNITS_': 'no label', 'NBR_UNIT_1': 'no label', 'UOM': 'no label', 'DATE_PLANN': 'no label', 'DATE_COMPL': 'no label', 'FISCAL_YEA': 'no label', 'FISCAL_Y_1': 'no label', 'FY_PLANNED': 'no label', 'KEYPOINT': 'no label', 'FUND_CODE': 'no label', 'METHOD_COD': 'no label', 'EQUIPMENT_': 'no label', 'COST_PER_U': 'no label', 'NEPA_PROJE': 'no label', 'NEPA_DOC_N': 'no label', 'IMPLEMENTA': 'no label', 'IMPLEMEN_1': 'no label', 'IMPLEMEN_2': 'no label', 'ACCOMPLISH': 'no label', 'ACCOMPLI_1': 'no label', 'ACTIVITY_1': 'no label', 'ACTIVITY_U': 'no label', 'FACTS_ID': 'no label', 'SUBUNIT': 'no label', 'FEATURE_TY': 'no label', 'TREATMENT_': 'no label', 'ACTIVITY_2': 'no label', 'ACTIVITY_S': 'no label', 'WORKFORCE_': 'no label', 'NEPA_PRO_1': 'no label', 'SUID_CN': 'no label', 'ISWUI': 'no label', 'CWPP': 'no label', 'CAT_NM': 'no label', 'EQUIPMENT': 'no label', 'METHOD': 'no label', 'TREATMEN_1': 'no label', 'STAGE': 'no label', 'STAGE_VALU': 'no label', 'REV_DATE': 'no label', 'DATA_SOURC': 'no label', 'DATA_SOU_1': 'no label', 'ACCURACY': 'no label', 'FS_UNIT_ID': 'no label', 'FS_UNIT_NA': 'no label', 'CRC_VALUE': 'no label', 'ETL_MODIFI': 'no label', 'UK': 'no label', 'EDW_INSERT': 'no label', 'UK_HAZ': 'no label', 'CRC_HAZ': 'no label', 'ETL_MODI_1': 'no label', 'GIS_ACRES': 'no label', 'DATE_AWARD': 'no label', 'FY_AWARDED': 'no label', 'PURPOSE_CO': 'no label', 'ACT_CREATE': 'no label', 'ACT_MODIFI': 'no label', 'SHAPEAREA': 'no label', 'SHAPELEN': 'no label', 'SHAPE_1': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_RoadlessAreas_6.set('fieldLabels', {'OBJECTID_1': 'no label', 'REGION': 'no label', 'FOREST': 'no label', 'STATE': 'no label', 'NAME': 'no label', 'CATEGORY': 'no label', 'ACRES': 'no label', 'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_HighVoltagePowerLines_7.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_HighVoltagePowerLines_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});