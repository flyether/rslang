import ModelView from '../view/view';

class ModuleModel {
  myModuleView!: ModelView;

  init(view: ModelView):void {
    this.myModuleView = view;
  }

  updateState(pageName:string):void {
    this.myModuleView.renderContent(pageName);
  }
}

export default ModuleModel;
