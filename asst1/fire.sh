# Fire selected = Glass Fire; Start Date = 9/27/20; End Date = 10/16/20; Counties = Sonoma & Napa

# Extract counties from national dataset and convert to proper projection where county name = Sonoma or Napa
ogr2ogr \
	-overwrite\
	-t_srs EPSG:3310\
	-where "(NAME='Sonoma' OR NAME='Napa') AND STATEFP='06'"\
	Glass_Counties \
	counties/tl_2018_us_county

# Create var input_images for all dates of fire
 input_images='
	https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&&CRS=EPSG:4326&WRAP=DAY&LAYERS=MODIS_Terra_CorrectedReflectance_TrueColor&FORMAT=image/tiff&HEIGHT=2276&WIDTH=2276&BBOX=37,-125,42,-120&TIME=2020-09-26
	https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&&CRS=EPSG:4326&WRAP=DAY&LAYERS=MODIS_Terra_CorrectedReflectance_TrueColor&FORMAT=image/tiff&HEIGHT=2276&WIDTH=2276&BBOX=37,-125,42,-120&TIME=2020-09-27
	https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&&CRS=EPSG:4326&WRAP=DAY&LAYERS=MODIS_Terra_CorrectedReflectance_TrueColor&FORMAT=image/tiff&HEIGHT=2276&WIDTH=2276&BBOX=37,-125,42,-120&TIME=2020-09-28
	https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&&CRS=EPSG:4326&WRAP=DAY&LAYERS=MODIS_Terra_CorrectedReflectance_TrueColor&FORMAT=image/tiff&HEIGHT=2276&WIDTH=2276&BBOX=37,-125,42,-120&TIME=2020-09-29
	https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&&CRS=EPSG:4326&WRAP=DAY&LAYERS=MODIS_Terra_CorrectedReflectance_TrueColor&FORMAT=image/tiff&HEIGHT=2276&WIDTH=2276&BBOX=37,-125,42,-120&TIME=2020-09-30
	https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&&CRS=EPSG:4326&WRAP=DAY&LAYERS=MODIS_Terra_CorrectedReflectance_TrueColor&FORMAT=image/tiff&HEIGHT=2276&WIDTH=2276&BBOX=37,-125,42,-120&TIME=2020-10-01
	https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&&CRS=EPSG:4326&WRAP=DAY&LAYERS=MODIS_Terra_CorrectedReflectance_TrueColor&FORMAT=image/tiff&HEIGHT=2276&WIDTH=2276&BBOX=37,-125,42,-120&TIME=2020-10-02
	https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&&CRS=EPSG:4326&WRAP=DAY&LAYERS=MODIS_Terra_CorrectedReflectance_TrueColor&FORMAT=image/tiff&HEIGHT=2276&WIDTH=2276&BBOX=37,-125,42,-120&TIME=2020-10-03
	https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&&CRS=EPSG:4326&WRAP=DAY&LAYERS=MODIS_Terra_CorrectedReflectance_TrueColor&FORMAT=image/tiff&HEIGHT=2276&WIDTH=2276&BBOX=37,-125,42,-120&TIME=2020-10-04
	https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&&CRS=EPSG:4326&WRAP=DAY&LAYERS=MODIS_Terra_CorrectedReflectance_TrueColor&FORMAT=image/tiff&HEIGHT=2276&WIDTH=2276&BBOX=37,-125,42,-120&TIME=2020-10-05
	https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&&CRS=EPSG:4326&WRAP=DAY&LAYERS=MODIS_Terra_CorrectedReflectance_TrueColor&FORMAT=image/tiff&HEIGHT=2276&WIDTH=2276&BBOX=37,-125,42,-120&TIME=2020-10-06
	https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&&CRS=EPSG:4326&WRAP=DAY&LAYERS=MODIS_Terra_CorrectedReflectance_TrueColor&FORMAT=image/tiff&HEIGHT=2276&WIDTH=2276&BBOX=37,-125,42,-120&TIME=2020-10-07
	https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&&CRS=EPSG:4326&WRAP=DAY&LAYERS=MODIS_Terra_CorrectedReflectance_TrueColor&FORMAT=image/tiff&HEIGHT=2276&WIDTH=2276&BBOX=37,-125,42,-120&TIME=2020-10-08
	https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&&CRS=EPSG:4326&WRAP=DAY&LAYERS=MODIS_Terra_CorrectedReflectance_TrueColor&FORMAT=image/tiff&HEIGHT=2276&WIDTH=2276&BBOX=37,-125,42,-120&TIME=2020-10-09
	https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&&CRS=EPSG:4326&WRAP=DAY&LAYERS=MODIS_Terra_CorrectedReflectance_TrueColor&FORMAT=image/tiff&HEIGHT=2276&WIDTH=2276&BBOX=37,-125,42,-120&TIME=2020-10-10
	https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&&CRS=EPSG:4326&WRAP=DAY&LAYERS=MODIS_Terra_CorrectedReflectance_TrueColor&FORMAT=image/tiff&HEIGHT=2276&WIDTH=2276&BBOX=37,-125,42,-120&TIME=2020-10-11
	https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&&CRS=EPSG:4326&WRAP=DAY&LAYERS=MODIS_Terra_CorrectedReflectance_TrueColor&FORMAT=image/tiff&HEIGHT=2276&WIDTH=2276&BBOX=37,-125,42,-120&TIME=2020-10-12
	https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&&CRS=EPSG:4326&WRAP=DAY&LAYERS=MODIS_Terra_CorrectedReflectance_TrueColor&FORMAT=image/tiff&HEIGHT=2276&WIDTH=2276&BBOX=37,-125,42,-120&TIME=2020-10-13
	https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&&CRS=EPSG:4326&WRAP=DAY&LAYERS=MODIS_Terra_CorrectedReflectance_TrueColor&FORMAT=image/tiff&HEIGHT=2276&WIDTH=2276&BBOX=37,-125,42,-120&TIME=2020-10-14
	https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&&CRS=EPSG:4326&WRAP=DAY&LAYERS=MODIS_Terra_CorrectedReflectance_TrueColor&FORMAT=image/tiff&HEIGHT=2276&WIDTH=2276&BBOX=37,-125,42,-120&TIME=2020-10-15
	https://wvs.earthdata.nasa.gov/api/v1/snapshot?REQUEST=GetSnapshot&&CRS=EPSG:4326&WRAP=DAY&LAYERS=MODIS_Terra_CorrectedReflectance_TrueColor&FORMAT=image/tiff&HEIGHT=2276&WIDTH=2276&BBOX=37,-125,42,-120&TIME=2020-10-16	
	'
	
num_var=1

# Create forloop to clip daily images to county boundaries and convert to proper projection	
 for foo in $input_images
 do
	echo This time foo is $foo
	gdalwarp \
	-overwrite\
	-t_srs EPSG:3310\
	-cutline Glass_Counties\
	-crop_to_cutline\
	-dstalpha\
	$foo\
	glassfire_day$num_var.tif
	let num_var=num_var+1
done
