window.addEventListener('load', () => {
	const form = document.querySelector("#tasks_form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	const delete_icon = `<svg xmlns="http://www.w3.org/2000/svg"
										 width="135.486mm" height="135.486mm"
										 viewBox="0 0 512 512">
									  <path id="delete"
											fill="red" stroke="black" stroke-width="1"
											d="M 170.00,50.00
											   C 170.00,50.00 170.00,19.00 170.00,19.00
												 170.06,7.38 173.11,0.16 186.00,0.00
												 186.00,0.00 274.00,0.00 274.00,0.00
												 274.00,0.00 316.00,0.00 316.00,0.00
												 321.21,0.00 330.66,-0.80 334.98,1.85
												 341.73,5.99 341.99,12.97 342.00,20.00
												 342.00,20.00 342.00,50.00 342.00,50.00
												 342.00,50.00 170.00,50.00 170.00,50.00 Z
											   M 51.10,145.00
											   C 51.10,145.00 51.10,121.00 51.10,121.00
												 51.10,121.00 51.10,105.00 51.10,105.00
												 53.06,92.80 61.39,83.39 73.00,79.52
												 77.63,77.98 80.24,78.01 85.00,78.00
												 85.00,78.00 354.00,78.00 354.00,78.00
												 354.00,78.00 427.00,78.00 427.00,78.00
												 447.99,78.03 460.97,91.02 461.00,112.00
												 461.00,112.00 461.00,145.00 461.00,145.00
												 461.00,145.00 51.10,145.00 51.10,145.00 Z
											   M 84.00,173.00
											   C 84.00,173.00 428.00,173.00 428.00,173.00
												 428.00,173.00 427.09,184.00 427.09,184.00
												 427.09,184.00 424.09,225.00 424.09,225.00
												 424.09,225.00 413.91,369.00 413.91,369.00
												 413.91,369.00 412.09,390.00 412.09,390.00
												 412.09,390.00 410.83,411.00 410.83,411.00
												 410.83,411.00 409.00,435.00 409.00,435.00
												 409.00,435.00 407.09,458.00 407.09,458.00
												 407.09,458.00 404.93,485.00 404.93,485.00
												 404.93,485.00 404.93,493.00 404.93,493.00
												 403.45,501.45 398.42,508.66 390.00,511.20
												 387.02,512.10 384.08,512.00 381.00,512.00
												 381.00,512.00 129.00,512.00 129.00,512.00
												 126.35,512.00 123.57,512.11 121.00,511.36
												 105.75,506.96 105.78,492.76 104.91,480.00
												 104.91,480.00 103.09,458.00 103.09,458.00
												 103.09,458.00 101.72,434.00 101.72,434.00
												 101.72,434.00 98.91,392.00 98.91,392.00
												 98.91,392.00 92.91,304.00 92.91,304.00
												 92.91,304.00 86.91,216.00 86.91,216.00
												 86.91,216.00 84.00,173.00 84.00,173.00 Z
											   M 202.00,220.39
											   C 197.71,221.74 194.04,223.73 192.09,228.04
												 190.59,231.34 191.00,237.27 191.00,241.00
												 191.00,241.00 191.00,265.00 191.00,265.00
												 191.00,265.00 191.00,403.00 191.00,403.00
												 191.00,403.00 191.00,435.00 191.00,435.00
												 191.12,443.53 196.73,450.96 206.00,449.77
												 216.00,448.50 217.99,440.39 218.00,432.00
												 218.00,432.00 218.00,268.00 218.00,268.00
												 218.00,268.00 218.00,235.00 218.00,235.00
												 217.87,225.46 211.69,219.32 202.00,220.39 Z
											   M 305.00,220.34
											   C 293.83,223.35 293.02,231.98 293.00,242.00
												 293.00,242.00 293.00,271.00 293.00,271.00
												 293.00,271.00 293.00,428.00 293.00,428.00
												 293.01,433.85 293.20,441.14 297.53,445.61
												 303.91,452.20 314.28,450.66 318.99,442.98
												 321.21,439.37 320.99,436.04 321.00,432.00
												 321.00,432.00 321.00,268.00 321.00,268.00
												 321.00,268.00 321.00,243.00 321.00,243.00
												 321.00,239.64 321.27,232.94 320.35,230.00
												 318.13,222.92 312.05,219.70 305.00,220.34 Z" />
									</svg>`;
	const edit_icon = ` <svg xmlns="http://www.w3.org/2000/svg"
										 width="170.724mm" height="170.724mm"
										 viewBox="0 0 512 512">
									  <path id="pen"
											fill="black" stroke="black" stroke-width="1"
											d="M 390.00,15.26
											   C 392.37,15.14 393.55,14.95 396.00,15.26
												 428.23,16.92 440.72,33.72 462.00,55.00
												 479.23,72.23 495.69,86.45 496.00,113.00
												 496.13,124.22 496.03,131.21 491.94,142.00
												 484.96,160.38 466.81,175.19 453.00,189.00
												 453.00,189.00 395.00,247.00 395.00,247.00
												 395.00,247.00 265.00,377.00 265.00,377.00
												 265.00,377.00 224.00,418.00 224.00,418.00
												 219.54,422.46 206.31,436.33 202.00,439.01
												 202.00,439.01 170.00,450.33 170.00,450.33
												 170.00,450.33 106.00,471.67 106.00,471.67
												 106.00,471.67 55.00,488.67 55.00,488.67
												 48.35,490.88 35.44,496.00 29.00,495.97
												 21.41,495.93 15.49,490.86 15.36,483.00
												 15.28,478.45 22.45,458.64 24.33,453.00
												 24.33,453.00 56.00,358.00 56.00,358.00
												 56.00,358.00 70.45,314.00 70.45,314.00
												 74.17,304.93 86.81,294.19 94.00,287.00
												 94.00,287.00 143.00,238.00 143.00,238.00
												 143.00,238.00 301.00,80.00 301.00,80.00
												 301.00,80.00 335.00,46.00 335.00,46.00
												 342.46,38.54 349.81,30.20 359.00,24.87
												 371.22,17.80 376.67,17.33 390.00,15.26 Z
											   M 353.00,68.00
											   C 353.00,68.00 392.23,107.50 392.23,107.50
												 392.23,107.50 418.23,133.63 418.23,133.63
												 418.23,133.63 435.58,150.85 435.58,150.85
												 437.23,152.52 440.89,156.70 443.17,156.97
												 446.48,157.35 450.82,152.18 453.00,150.00
												 462.38,140.62 468.42,132.77 468.96,119.00
												 469.76,98.57 456.10,88.10 443.00,75.00
												 427.94,59.94 416.21,42.74 393.00,43.00
												 387.39,43.07 383.14,43.99 378.00,46.31
												 373.21,48.48 369.95,50.86 366.00,54.29
												 361.51,58.19 356.45,63.18 353.00,68.00 Z
											   M 424.00,178.00
											   C 424.00,178.00 357.00,111.00 357.00,111.00
												 357.00,111.00 341.00,95.00 341.00,95.00
												 339.18,93.20 335.69,89.20 333.00,89.20
												 329.59,89.20 319.78,100.22 317.00,103.00
												 317.00,103.00 276.00,144.00 276.00,144.00
												 276.00,144.00 161.00,259.00 161.00,259.00
												 161.00,259.00 124.00,296.00 124.00,296.00
												 118.31,301.69 108.36,310.91 104.00,317.00
												 104.00,317.00 171.00,384.00 171.00,384.00
												 171.00,384.00 187.00,400.00 187.00,400.00
												 188.82,401.80 192.31,405.80 195.00,405.80
												 198.41,405.80 208.22,394.78 211.00,392.00
												 211.00,392.00 252.00,351.00 252.00,351.00
												 252.00,351.00 367.00,236.00 367.00,236.00
												 367.00,236.00 404.00,199.00 404.00,199.00
												 409.69,193.31 419.64,184.09 424.00,178.00 Z
											   M 91.00,343.00
											   C 91.00,343.00 85.33,357.00 85.33,357.00
												 85.33,357.00 77.00,382.00 77.00,382.00
												 77.00,382.00 51.00,461.00 51.00,461.00
												 51.00,461.00 128.00,435.33 128.00,435.33
												 128.00,435.33 169.00,422.00 169.00,422.00
												 169.00,422.00 142.00,394.00 142.00,394.00
												 142.00,394.00 91.00,343.00 91.00,343.00 Z" />
									</svg>`;
	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerHTML = edit_icon;

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerHTML = delete_icon;

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});
