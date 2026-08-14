const sceneConfig = {
  default: { firstScene: 'e-foyer', sceneFadeDuration: 650, autoLoad: true, showControls: true },
  scenes: {
    'e-foyer': { title: 'E区门厅（2.3m）', type: 'equirectangular', panorama: 'assets/panoramas/e-foyer-empty.png', hfov: 105, yaw: 0, pitch: 0 },
    'a-wall': { title: 'A墙（6.9m）', type: 'equirectangular', panorama: 'assets/panoramas/a-wall-empty.png', hfov: 105, yaw: 0, pitch: 0 },
    'b-wall': { title: 'B墙（8.4m）', type: 'equirectangular', panorama: 'assets/panoramas/b-wall-empty.png', hfov: 105, yaw: 0, pitch: 0 },
    'c-wall': { title: 'C墙（8.06m）', type: 'equirectangular', panorama: 'assets/panoramas/c-wall-empty.png', hfov: 105, yaw: 0, pitch: 0 },
    'd-office': { title: 'D区办公区（4.9m）', type: 'equirectangular', panorama: 'assets/panoramas/d-office-empty.png', hfov: 105, yaw: 0, pitch: 0 }
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

selectScene('e-foyer');
