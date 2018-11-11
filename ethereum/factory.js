import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x19dc3D013ac9187c548C72B866f9c8dBbF7903Ba'
);

export default instance;
