const user = [""];

async function getUser() {
    return new Promise<string[]>(resolve => {
        setTimeout(() => resolve(user), 200);
    });
}

export default getUser;
