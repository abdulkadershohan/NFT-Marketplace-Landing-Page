import { Stack } from '@mui/system';
import Articles from './components/articles/Articles';
import CreateAndSell from './components/createAndSell/CreateAndSell';
import Header from './components/header/Header';
import TendingNFT from './components/tendingNFT/TendingNFT';
import TopCategories from './components/topCategories/TopCategories';
import TopCollections from './components/topCollections/TopCollections';
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
        <TopCollections />
        <TopCategories />
        <CreateAndSell />
        <Articles />
      </Stack>

    </Stack >
  );
}

export default App;
