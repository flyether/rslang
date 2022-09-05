/* eslint-disable import/no-cycle */

import { ModuleController } from '../../controller/controllerSprint';
import { ModuleModel } from '../../model/modelSprint';
import { ModuleView } from '../../view/viewSprint';

export function initSprintMVC(): void {
  const view = new ModuleView();
  const model = new ModuleModel();
  const controller = new ModuleController();
  const container = document.querySelector('.sprint-conteiner') as HTMLElement;
  view.init(container);
  model.init(view);
  controller.init(container, model);
}
