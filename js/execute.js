function appendImage() {
  const input = document.getElementById("url");
  var videoID = input.value.match(/(?:\/|%3D|v=)([\w-]{11})(?:[%#?&]|$)/);
  
  if (!videoID) {
    // Show SweetAlert error message if the input is empty or invalid
    Swal.fire({
      icon: 'error',
      title: '链接获取错误！',
      text: '请输入一个正确的 YouTube 影片链接!',
      footer: '注记：请在Youtube ID后面添加 "https://www.youtube.com/watch?v=" 或者 "https://youtu.be/" 哦~'
    });
    return false;
  }

  videoID = input.value.match(/(?:\/|%3D|v=)([\w-]{11})(?:[%#?&]|$)/)[1];
  const imageTypes = ['default', 'sddefault', 'mqdefault', 'hqdefault', 'maxresdefault'];
  const imageTypealt = ['sd', 'mq', 'hq', 'maxres'];
  let images = '';

  imageTypes.forEach((type) => {
    images += `<img src="https://img.youtube.com/vi/${videoID}/${type}.jpg" alt="${videoID}/${type}" class="img-thumbnail"><br>`;
  });

  for (let i = 1; i <= 3; i++) {
    imageTypealt.forEach((type) => {
      images += `<img src="https://img.youtube.com/vi/${videoID}/${type}${i}.jpg" alt="${videoID}/${type}${i}" class="img-thumbnail"><br>`;
    });
  }

  const modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = images;
}