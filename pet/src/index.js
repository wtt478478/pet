import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/user').default);
<<<<<<< HEAD
app.model(require('./models/community').default);
app.model(require('./models/layout').default);
app.model(require('./models/pet').default);
app.model(require('./models/upload').default);
app.model(require('./models/article').default);
=======
app.model(require('./models/layout').default);
>>>>>>> f12af79a6812b84a035430f68949009cb3c61c96

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

export default app
