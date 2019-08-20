
export default function(resolve, isPC, isLog) {
  isLog = (isLog == null) ? false : isLog;

  const
    imgs = document.querySelectorAll('.js-img'),
    imgsPC = document.querySelectorAll('.js-img--pc'),
    imgsSP = document.querySelectorAll('.js-img--sp'),
    bgImgs = document.querySelectorAll('.js-bg-img'),
    bgImgsPC = document.querySelectorAll('.js-bg-img--pc'),
    bgImgsSP = document.querySelectorAll('.js-bg-img--sp');

  const imgArray = [];
  setImgArray();

  if(isLog) console.log(imgArray);


  function setImgArray() {
    if (
      imgs.length > 0 || imgsPC.length > 0 || imgsSP.length > 0 ||
      bgImgs.length > 0 || bgImgsPC.length > 0 || bgImgsSP.length > 0) {
      for (let i = 0; i < imgs.length; i++) {
        imgArray.push(imgs[i].src);
      }
      for (let i = 0; i < bgImgs.length; i++) {
        let elm = bgImgs[i];

        let img = elm.ownerDocument.defaultView.getComputedStyle(elm, null).backgroundImage;

        if (img.indexOf('linear-gradient') != -1) continue;
        let url = img.replace(/(url\(|\)|")/g, '');
        if(url == 'none') {
          url = getImgPath(elm);
        }
        if (url == 'none' || url == '') continue;
        imgArray.push(url);
      }
      if(isPC) {
        for (let i = 0; i < imgsPC.length; i++) {
          imgArray.push(imgsPC[i].src);
        }
        for (let i = 0; i < bgImgsPC.length; i++) {
          let elm = bgImgsPC[i];
          let img = elm.ownerDocument.defaultView.getComputedStyle(elm, null).backgroundImage;
          if(img.indexOf('linear-gradient') != -1) continue;
          let url = img.replace(/(url\(|\)|")/g, '');
          if(url == 'none') {
            url = getImgPath(elm);
          }
          if(url == 'none' || url == '') continue;
          imgArray.push(url);
        }
      } else {
        for (let i = 0; i < imgsSP.length; i++) {
          imgArray.push(imgsSP[i].src);
        }
        for (let i = 0; i < bgImgsSP.length; i++) {
          let elm = bgImgsSP[i];
          let img = elm.ownerDocument.defaultView.getComputedStyle(elm, null).backgroundImage;
          if (img.indexOf('linear-gradient') != -1) continue;
          let url = img.replace(/(url\(|\)|")/g, '');
          if(url == 'none') {
            url = getImgPath(elm);
          }
          if (url == 'none' || url == '') continue;
          imgArray.push(url);
        }
      }
      if(imgArray.length == 0) handleComplete();
      loadImg(imgArray);
    } else {
      handleComplete();
    }
  }

  function getImgPath(elm) {
    let htmlAttributes = elm.innerHTML.split(' ')
    // console.log(htmlAttributes)
    for(let i = 0; i < htmlAttributes.length; i++) {
      let text = htmlAttributes[i];
      if ( text.match(/data-img-path=/)) {
        let start = htmlAttributes[i].indexOf('"') + 1
        text = text.slice(start, text.length - 1)
        return text;
      }
    }
  }

  function loadImg() {
    let length = imgArray.length,
        count = 0,
        progress;
    for (var i = 0; i < length; i++) {
      const img = new Image();
      img.onload = () => {
        count++;
        progress = count / length;
        handleFileComplete(progress);
        if (count >= length) handleComplete();
      };
      img.src = imgArray[i];
    }
  }

  function handleComplete() {
    // console.log('handleComplete')
    resolve();
  }

  function handleFileComplete(progress) {
    if(isLog) console.log(progress);
  }
}
