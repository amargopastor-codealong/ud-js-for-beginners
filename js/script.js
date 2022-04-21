window.onload = () => {
	console.log('se ha cargado la pagina');
	function search() {
		//get hobby
		const hobbyField = document.getElementById('hobby');
		const hobby = hobbyField.value;

		let resultsHTML = '';

		for (let i = 0; i < students.length; i++) {
			if (hobby == '' || hobby == students[i].hobby) {
				resultsHTML +=
					'<div class="person-row">\
                                <img src="images/' +
					students[i].avatar +
					'" />\
                                <div class="person-info">\
                                <div>' +
					students[i].name +
					'</div>\
                                <div>' +
					students[i].hobby +
					'</div></div>\
                                <button>Add as friend</button></div>';
			}
		}
		results.innerHTML = resultsHTML;
	}

	function Student() {
		return {
			avatar: avatars[Math.floor(Math.random() * avatars.length)],
			name: names[Math.floor(Math.random() * names.length)],
			hobby: hobbies[Math.floor(Math.random() * hobbies.length)],
		};
	}

	function students_array_generator(num_students = 30) {
		for (let i = 0; i < num_students; i++) {
			students.push(Student());
		}
	}

	function students_html() {
		let resultsHTML = '';
		for (let i = 0; i < students.length; i++) {
			resultsHTML +=
				'<div class="person-row">\
            <img src="images/' +
				students[i].avatar +
				'" />\
            <div class="person-info">\
            <div>' +
				students[i].name +
				'</div>\
            <div>' +
				students[i].hobby +
				'</div></div>\
             <button>Add as friend</button></div>';
		}
		results.innerHTML = resultsHTML;
	}

	function start() {
		document.getElementById('students_div').style.display = 'none';
		document.getElementById('form_div').style.display = 'block';

		students_array_generator();
		students_html();
	}

	function go_doc() {
		window.open(
			'https://github.com/amargopastor-code-along/ud-js-for-beginners/tree/main/docs',
			'_blank' // <- This is what makes it open in a new window.
		);
	}

	document.getElementById('students_div').style.display = 'block';
	document.getElementById('form_div').style.display = 'none';

	const students = [];

	const results = document.getElementById('results');

	const start_button = document.getElementById('start_button');
	start_button.addEventListener('click', start);

	const search_button = document.getElementById('search_button');
	search_button.addEventListener('click', search);

	const doc_button = document.getElementById('doc_button');
	doc_button.addEventListener('click', go_doc);
};
