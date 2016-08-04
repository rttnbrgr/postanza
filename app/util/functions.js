function getPhotos(dataSet) {
	
	var thePhotos = [];

	console.log('the length of the dataset: ' + dataSet.length);	
	
	for(var i=0; i < dataSet.length; i++) {
		if ( dataSet[i].images.length !== 0 ){
			// console.log( dataSet[i].images[0].url );
			thePhotos.push(dataSet[i].images[0].url);
		}
	}

	console.log("here are the photos", thePhotos );
}
// getPhotos(data);

function countThePostTypes(postanoData) {
	var photos = 0;
	var vines = 0;
	var tweets = 0;
	var postType = '';

	for(var i=0; i < postanoData.length; i++) {
		postType = postanoData[i].source_type;
		if(postType === 'instagram') {
			photos += 1;
		} else if (postType === 'vine') {
			vines += 1;
		} else if (postType === 'twitter') {
			tweets += 1;
		}
	}

	console.log('here is the breakdown of the posts:');
	console.log('ig-photos = ' + photos);
	console.log('vines = ' + vines);
	console.log('tweets = ' + tweets);
} 
// countThePostTypes(data);

function tweetsWithPhotos(postanoData) {
	var tweetsWithPic = 0;
	
	console.log('some of those tweets have photos tho...');

	for(var i=0; i < postanoData.length; i++) {
		postanoData[i].source_type === 'twitter' && postanoData[i].images.length !==0 ? tweetsWithPic++ : console.log('tweet(s) dont have a photo');
	}

	console.log('tweets with photos = ' + tweetsWithPic);
}
// tweetsWithPhotos(data);

function isTweetFilter(obj) {
	if( obj.source_type === "twitter" ) {
		return true;
	} else {
		return false;
	}
}

export { getPhotos, countThePostTypes, tweetsWithPhotos, isTweetFilter };