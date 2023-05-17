function getCurrentTimestamp() {
	return new Date();
}

function renderMessageToScreen(args) {
	let displayDate = (args.time || getCurrentTimestamp()).toLocaleString('en-IN', {
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	});
	let messagesContainer = $('.messages');

	let message = $(`
	<li class="message ${args.message_side}">
		<div class="avatar"></div>
		<div class="text_wrapper">
			<div class="text">${args.text}</div>
			<div class="timestamp">${displayDate}</div>
			<input type="button" value="Delete" onclick="deleteTheMessage(this)" />
		</div>
	</li>
	`);

	messagesContainer.append(message);

	setTimeout(function () {
		message.addClass('appeared');
	}, 0);
	messagesContainer.animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 300);
}

function showUserMessage(message, datetime) {
	renderMessageToScreen({
		text: message,
		time: datetime,
		message_side: 'right',
	});
}

function showBotMessage(message, datetime) {
	renderMessageToScreen({
		text: message,
		time: datetime,
		message_side: 'left',
	});
}

$('#send_button').on('click', function (e) {
	showUserMessage($('#msg_input').val());
	$('#msg_input').val('');
	
	setTimeout(function () {
		showBotMessage(randomstring());
	}, 300);
});

function randomstring(length = 20) {
	let output = '';

	var randomchar = function () {
		var n = Math.floor(Math.random() * 62);
		if (n < 10) return n;
		if (n < 36) return String.fromCharCode(n + 55);
		return String.fromCharCode(n + 61);
	};

	while (output.length < length) output += randomchar();
	return output;
}

$(window).on('load', function () {
	showBotMessage('Hello there! Type in a message.');
});

function deleteTheMessage(p1) {
    p1.parentElement.remove();
  }