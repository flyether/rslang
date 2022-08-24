import ModelView from '../view/view';
import { MenuItems } from '../types/types';

class ModuleModel {
  myModuleView!: ModelView;

  init(view: ModelView): void {
    this.myModuleView = view;
  }

  updateState(pageName: string): void {
    this.myModuleView.renderContent(pageName);
  }

  highlightActiveMenuItem(obj: MenuItems, hashName: string): void {
    this.myModuleView.highlightActiveMenuItem(obj, hashName);
  }
}

export default ModuleModel;
