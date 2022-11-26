import { Stack } from '@mui/system';
import Header from './components/header/Header';
import TendingNFT from './components/tendingNFT/TendingNFT';
import WalletSupport from './components/walletSupport/WalletSupport';
import './font.css';

function App() {
  return (
    <Stack>
      <Header />
      <Stack
        sx={{
          py: { xs: 50, md: 10 }
        }}
      >
        <WalletSupport />
        <TendingNFT />
      </Stack>

    </Stack >
  );
}

export default App;
