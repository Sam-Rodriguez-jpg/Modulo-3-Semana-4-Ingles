// Wait for all HTML content to load before running the script.
document.addEventListener('DOMContentLoaded', () => {

   // We get references to the main elements.
    const albumList = document.getElementById('album-list');
    const infoButtons = document.querySelectorAll('.buttonChild');
    const detailViews = document.querySelectorAll('.album-details-view');
    const backButtons = document.querySelectorAll('.back-button');

    // Function to display a specific detail view.
    const showAlbumDetails = (albumId) => {
        // Ocultamos la lista de álbumes.
        albumList.classList.add('hidden');

        // We hide the album list.
        const detailViewToShow = document.getElementById(`details-${albumId}`);
        if (detailViewToShow) {
            detailViewToShow.classList.remove('hidden');
        }
    };

    // Function to return to the album list.
    const showAlbumList = () => {

        // We show the list of albums.
        albumList.classList.remove('hidden');

        // Hide all detail views.
        detailViews.forEach(view => {
            view.classList.add('hidden');
        });
    };

    // We added listeners to the "Information here" buttons.
    infoButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const albumId = event.target.dataset.album;
            showAlbumDetails(albumId);
        });
    });

    // We added listeners to all the "Go Back" buttons.
    backButtons.forEach(button => {
        button.addEventListener('click', showAlbumList);
    });

});