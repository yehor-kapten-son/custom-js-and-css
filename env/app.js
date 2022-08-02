function renderEnv(env){
    const template = document.createElement('h1');
    template.innerText = env;
    template.classList.add(env);
    template.classList.add('env');
    document.body.prepend(template);
}