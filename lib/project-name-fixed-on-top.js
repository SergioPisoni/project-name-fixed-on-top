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
    async activate( state ) {
      // Wait for rendering
      await new Promise( ok => setTimeout( ok ) );

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
