import ModelView from '../view/view';


class ModuleModel {
  myModuleView!: ModelView;

  init(view: ModelView) {
    this.myModuleView = view;
  }

  updateState(pageName:string) {
    this.myModuleView.renderContent(pageName);
  }

  
}

export default ModuleModel;
