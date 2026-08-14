const sceneConfig = {
  default: { firstScene: 'a-wall', sceneFadeDuration: 650, autoLoad: true, showControls: true, maxHfov: 150 },
  scenes: {
    'a-wall': { title: 'A区｜从一头牛出发 / 6.9米', type: 'equirectangular', panorama: 'assets/panoramas/a-wall-empty.png', hfov: 140, yaw: 90, pitch: 0 },
    'b-wall': { title: 'B区｜技术闭环 / 阿牧如何解决问题 / 8.4米', type: 'equirectangular', panorama: 'assets/panoramas/b-wall-empty.png', hfov: 140, yaw: 60, pitch: 0 },
    'c-wall': { title: 'C区｜走向证据 / 不在会议室里想象牧场 / 8.06米', type: 'equirectangular', panorama: 'assets/panoramas/c-wall-empty.png', hfov: 140, yaw: 0, pitch: 0 },
    'd-office': { title: 'D区｜办公区 / 资质证书 / 4.9米', type: 'equirectangular', panorama: 'assets/panoramas/d-office-empty.png', hfov: 140, yaw: 0, pitch: 0 },
    'e-foyer': { title: 'E区｜企业文化 / 产业责任 / 2.3米', type: 'equirectangular', panorama: 'assets/panoramas/e-foyer-empty.png', hfov: 140, yaw: 0, pitch: 0 }
  }
};

const viewer = pannellum.viewer('panorama', sceneConfig);
const buttons = document.querySelectorAll('[data-scene]');

function selectScene(sceneId) {
  viewer.loadScene(sceneId);
  buttons.forEach((button) => button.setAttribute('aria-current', String(button.dataset.scene === sceneId)));
}

buttons.forEach((button) => button.addEventListener('click', () => selectScene(button.dataset.scene)));
viewer.on('scenechange', (sceneId) => {
  buttons.forEach((button) => button.setAttribute('aria-current', String(button.dataset.scene === sceneId)));
});

selectScene('a-wall');
