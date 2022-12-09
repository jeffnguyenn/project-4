$('#contactUsForm').validate({
	rules: {
		firstName: {
			required: true,
			minLength: 3,
		},
		lastName: {
			required: true,
			minLength: 3,
		},
		email: {
			required: true,
			email: true,
		},
		phone: {
			required: true,
			minLength: 10,
		},
		yesterday: {
			required: true,
		}
	},
	messages: {
		firstName: {
			required: " *Please enter your first name",
			minLength: 3,
		},
		lastName: {
			required: " *Please enter your last name",
			minLength: 3,
		},
		email: {
			required: " *Please enter an email address",
			email: " *INVALID email format"
		},
		phone: {
			required: " *Please enter a phone number",
			minLength: " *INVALID phone number",
		},
		yesterday: {
			required: " *Please enter a date",
		}
	}
});