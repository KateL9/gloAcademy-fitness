const selectClub = () => {
    const clubDropdown = document.querySelector('.clubs-list>ul');

    let expanded = false;

    document.addEventListener('click', (event) => {
        if (event.target.closest('.club-select')) {
            if (!expanded) {
                expanded = true;
                clubDropdown.style.display = 'block';
            } else {
                expanded = false;
                clubDropdown.style.display = 'none';
            }
        } else {
            expanded = false;
            clubDropdown.style.display = 'none';
        }
    });
};

export default selectClub;