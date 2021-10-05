'use babel';


const { project } = atom;



let disposable,
    element,
    initialName;


async function changeName( paths ) {
  // Wait for rendering
  await new Promise( ok => setTimeout( ok ) );

  element = document.querySelector( '.atom-dock-inner.left .tab-bar .tab .title' );
  initialName = initialName || ( element ? element.innerHTML : '' );

  if ( element ) {
    const name = paths.length ? document.querySelector( '.tree-view .project-root-header' ) : initialName;
    console.error( 'changeName', 'element ok', initialName, name.innerText || name, element, document.querySelector( '.atom-dock-inner.left .tab-bar .tab .title' ) );
    element.innerHTML = name.innerText || name
  }
}


export default {
    activate( state ) {
      console.error( 'activate' );
      disposable = project.emitter.on( 'did-change-paths', changeName );

      changeName( project.getPaths() )
    },

    deactivate() {
      console.error( 'deactivate' );
      changeName( [] );
      disposable.dispose()
    }
  };
