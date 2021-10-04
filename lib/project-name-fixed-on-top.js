'use babel';


const { project } = atom;


let disposable,
    initialName;


export default {
    activate( state ) {
      const element = document.querySelector( '.atom-dock-inner.left .tab-bar .tab .title' );

      initialName = element ? element.innerHTML : '';

      function changeName( paths ) {
        if ( element ) {
          console.error(paths, initialName);
          const name = paths.length ? document.querySelector( '.tree-view .project-root-header' ) : initialName;
          element.innerHTML = name.innerText || name
        }
      }

      disposable = project.emitter.on( 'did-change-paths', changeName );

      changeName( project.getPaths() )
    },

    deactivate() {
      disposable.dispose()
    }
  };
