const form = document.getElementById('createlink')
form.addEventListener('submit', createlink)

async function createlink(event) {
    event.preventDefault();
    const slug = document.getElementById('slug').value;
    const key = document.getElementById('api').value;
    const type2 = document.getElementById('type').value;
    const redirect2 = document.getElementById('redirect').value;
    const params = {
        'type': `${type2}`,
        'redirect': `${redirect2}`
    }
    const data = await fetch(`https://api.dsc.gg/v2/link/${slug}`, {
        method: 'post',
        body: JSON.stringify(params),
        headers: {'Authorization': key, 'Content-Type': 'application/json'}
    }).then((res => res.json()))
    if(data.success == true) {
        document.getElementById('link').innerHTML = `<b>Link: https://dsc.gg/${slug}</b><br>`
    } else {
        document.getElementById('link').innerHTML = `<b>Link: Sorry an error occured!</b><br>`
    }
}