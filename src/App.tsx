import reactLogo from '@/assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import { useStoreValue } from '@/store';
import { Button } from 'antd';

function App() {
    const [value, setValue] = useStoreValue();
    console.log('value', value, 'setValue', setValue);
    return (
        <div className="flex items-center justify-center mt-20">
            <span className="test-text">{value}</span>
            <img src={viteLogo} className="logo" alt="Vite logo" />
            <img src={reactLogo} className="logo react" alt="React logo" />

            <Button
                onClick={() => {
                    setValue('test value');
                }}
            >
                点击进行测试
            </Button>
        </div>
    );
}

export default App;