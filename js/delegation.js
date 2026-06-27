// js/delegation.js
// Event delegation global - captura data-action e data-form

console.log('[Delegation] Registrando event delegation...');

document.addEventListener('click', (e) => {
    // Encontra o elemento mais próximo com data-action
    const target = e.target.closest('[data-action]');
    if (!target) return;

    // Ignora se está dentro de um form (deixa o submit cuidar)
    if (target.closest('form') && target.type === 'submit') return;

    const action = target.dataset.action;
    const params = extractParams(target);

    e.preventDefault();
    e.stopPropagation();

    // Dispara evento global
    window.dispatchEvent(new CustomEvent(`action:${action}`, {
        detail: { target, params, originalEvent: e }
    }));

    console.log(`[Delegation] → action:${action}`, params);
});

document.addEventListener('submit', (e) => {
    const form = e.target.closest('[data-form]');
    if (!form) return;

    e.preventDefault();
    const formName = form.dataset.form;
    const data = getFormData(form);

    window.dispatchEvent(new CustomEvent(`form:${formName}`, {
        detail: { form, data }
    }));

    console.log(`[Delegation] → form:${formName}`, data);
});

document.addEventListener('change', (e) => {
    const target = e.target.closest('[data-bind]');
    if (!target) return;

    const field = target.dataset.bind;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    window.dispatchEvent(new CustomEvent('bind:change', {
        detail: { target, field, value }
    }));
});

// ===== Helpers =====
function extractParams(element) {
    const params = {};
    Array.from(element.attributes).forEach(attr => {
        if (attr.name.startsWith('data-param-')) {
            const key = attr.name.replace('data-param-', '');
            let value = attr.value;
            
            // Auto-parse de tipos
            if (value === 'true') value = true;
            else if (value === 'false') value = false;
            else if (value !== '' && !isNaN(value)) value = Number(value);
            
            params[key] = value;
        }
    });
    return params;
}

function getFormData(form) {
    const formData = new FormData(form);
    const data = {};
    
    formData.forEach((value, key) => {
        if (data[key]) {
            data[key] = Array.isArray(data[key]) ? [...data[key], value] : [data[key], value];
        } else {
            data[key] = value;
        }
    });
    
    // Checkboxes
    form.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        data[cb.name] = cb.checked;
    });
    
    return data;
}

console.log('[Delegation] ✅ Event delegation ativo');
