'use babel';


const { project } = atom;



let disposable,
    element,
    initialName;


function changeName( paths ) {
  if ( element ) {
    const name = paths.length ? document.querySelector( '.tree-view .project-root-header' ) : initialName;
    element.innerHTML = name.innerText || name
  }
}


export default {
    activate( state ) {
      element = document.querySelector( '.atom-dock-inner.left .tab-bar .tab .title' );

      initialName = element ? element.innerHTML : '';

      disposable = project.emitter.on( 'did-change-paths', changeName );

      changeName( project.getPaths() )
    },

    deactivate() {
      changeName( [] );
      disposable.dispose()
    }
  };
