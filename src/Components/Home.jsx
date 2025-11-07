



export default function Home() {


    return (
        <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <div className="mb-4">
          <img 
            src="/taiyaki.png"
            alt="Taiyaki"
            className="img-fluid rounded shadow-lg"
            style={{ 
              maxWidth: '300px',
              width: '100%'
            }}
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=400&fit=crop';
            }}
          />
        </div>
        
        <button 
          className="btn btn-primary btn-lg px-5 py-3 shadow"
          style={{ fontSize: '1.5rem' }}
        >
          Play Now
        </button>
      </div>
    </div>
    )
}