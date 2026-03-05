// Funcionalidad del buscador
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    // Productos simulados para la búsqueda
    const products = [
        { name: 'Smartphone Samsung', category: 'tecnologia', price: 299999 },
        { name: 'Laptop HP', category: 'tecnologia', price: 1299999 },
        { name: 'Auriculares Sony', category: 'tecnologia', price: 89999 },
        { name: 'Tablet iPad', category: 'tecnologia', price: 599999 },
        { name: 'Smartwatch', category: 'tecnologia', price: 199999 },
        { name: 'Cámara Canon', category: 'tecnologia', price: 899999 }
    ];
    
    // Función de búsqueda
    function performSearch(query) {
        if (!query.trim()) {
            showSearchMessage('Por favor ingresa un término de búsqueda');
            return;
        }
        
        const results = products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase())
        );
        
        displaySearchResults(results, query);
    }
    
    // Mostrar resultados de búsqueda
    function displaySearchResults(results, query) {
        // Crear modal de resultados si no existe
        let modal = document.getElementById('searchModal');
        if (!modal) {
            modal = createSearchModal();
        }
        
        const modalContent = modal.querySelector('.search-results-content');
        
        if (results.length === 0) {
            modalContent.innerHTML = `
                <h3>No se encontraron resultados para "${query}"</h3>
                <p>Intenta con otros términos de búsqueda</p>
            `;
        } else {
            modalContent.innerHTML = `
                <h3>Resultados para "${query}" (${results.length})</h3>
                <div class="search-results-grid">
                    ${results.map(product => `
                        <div class="search-result-item">
                            <img src="https://via.placeholder.com/100x100" alt="${product.name}">
                            <div class="result-info">
                                <h4>${product.name}</h4>
                                <p class="result-price">$${product.price.toLocaleString()}</p>
                                <button class="btn-primary btn-small">Ver detalles</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        modal.style.display = 'block';
    }
    
    // Crear modal de búsqueda
    function createSearchModal() {
        const modal = document.createElement('div');
        modal.id = 'searchModal';
        modal.className = 'search-modal';
        modal.innerHTML = `
            <div class="search-modal-content">
                <span class="search-close">&times;</span>
                <div class="search-results-content">
                    <!-- Resultados se insertan aquí -->
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Cerrar modal
        const closeBtn = modal.querySelector('.search-close');
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        // Cerrar al hacer clic fuera del modal
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        return modal;
    }
    
    // Mostrar mensaje de búsqueda
    function showSearchMessage(message) {
        // Crear toast notification
        const toast = document.createElement('div');
        toast.className = 'search-toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }
    
    // Event listeners
    searchBtn.addEventListener('click', () => {
        performSearch(searchInput.value);
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch(searchInput.value);
        }
    });
    
    // Autocompletado simple
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        if (query.length > 2) {
            const suggestions = products
                .filter(product => product.name.toLowerCase().includes(query))
                .slice(0, 5);
            
            showSuggestions(suggestions);
        } else {
            hideSuggestions();
        }
    });
    
    // Mostrar sugerencias
    function showSuggestions(suggestions) {
        let suggestionsList = document.getElementById('searchSuggestions');
        
        if (!suggestionsList) {
            suggestionsList = document.createElement('div');
            suggestionsList.id = 'searchSuggestions';
            suggestionsList.className = 'search-suggestions';
            searchInput.parentNode.appendChild(suggestionsList);
        }
        
        if (suggestions.length > 0) {
            suggestionsList.innerHTML = suggestions
                .map(product => `
                    <div class="suggestion-item" data-name="${product.name}">
                        ${product.name}
                    </div>
                `).join('');
            
            suggestionsList.style.display = 'block';
            
            // Agregar event listeners a las sugerencias
            suggestionsList.querySelectorAll('.suggestion-item').forEach(item => {
                item.addEventListener('click', () => {
                    searchInput.value = item.getAttribute('data-name');
                    hideSuggestions();
                    performSearch(searchInput.value);
                });
            });
        } else {
            suggestionsList.style.display = 'none';
        }
    }
    
    // Ocultar sugerencias
    function hideSuggestions() {
        const suggestionsList = document.getElementById('searchSuggestions');
        if (suggestionsList) {
            suggestionsList.style.display = 'none';
        }
    }
    
    // Ocultar sugerencias al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target)) {
            hideSuggestions();
        }
    });
});

// Estilos CSS para el modal y sugerencias (se agregan dinámicamente)
const searchStyles = `
    .search-modal {
        display: none;
        position: fixed;
        z-index: 2000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }
    
    .search-modal-content {
        background-color: white;
        margin: 5% auto;
        padding: 30px;
        border-radius: 8px;
        width: 90%;
        max-width: 800px;
        max-height: 80vh;
        overflow-y: auto;
    }
    
    .search-close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
        line-height: 1;
    }
    
    .search-close:hover {
        color: #333;
    }
    
    .search-results-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }
    
    .search-result-item {
        display: flex;
        gap: 15px;
        padding: 15px;
        border: 1px solid #eee;
        border-radius: 8px;
        transition: box-shadow 0.3s;
    }
    
    .search-result-item:hover {
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    .search-result-item img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 4px;
    }
    
    .result-info h4 {
        margin-bottom: 8px;
        color: #333;
    }
    
    .result-price {
        color: #00a650;
        font-weight: bold;
        font-size: 1.1rem;
        margin-bottom: 10px;
    }
    
    .btn-small {
        padding: 6px 12px;
        font-size: 12px;
    }
    
    .search-suggestions {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #ddd;
        border-top: none;
        border-radius: 0 0 4px 4px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        z-index: 1000;
        display: none;
    }
    
    .suggestion-item {
        padding: 12px 20px;
        cursor: pointer;
        border-bottom: 1px solid #f0f0f0;
    }
    
    .suggestion-item:hover {
        background-color: #f8f9fa;
    }
    
    .suggestion-item:last-child {
        border-bottom: none;
    }
    
    .search-toast {
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #333;
        color: white;
        padding: 12px 20px;
        border-radius: 4px;
        z-index: 3000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    }
    
    .search-toast.show {
        opacity: 1;
        transform: translateX(0);
    }
`;

// Agregar estilos al documento
const styleSheet = document.createElement('style');
styleSheet.textContent = searchStyles;
document.head.appendChild(styleSheet);