/* eslint-disable import/no-cycle */

import { ModuleController } from '../../controller/controllerStatistics';
import { ModuleModel } from '../../model/modelStatistics';
import { ModuleView } from '../../view/viewStatistics';

export function initStatisticsMVC(): void {
  const view = new ModuleView();
  const model = new ModuleModel();
  const controller = new ModuleController();
  const container = document.querySelector('.statistics-conteiner') as HTMLElement;
  view.init(container);
  model.init(view);
  controller.init(container, model);
}
