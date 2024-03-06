/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
        const formData = await request.formData();
        const title = formData.get('title');
        const description = formData.get('description');
        const priority = formData.get('priority');

        console.log({
            title, description, priority
        });
        
	}
};