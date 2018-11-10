import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x7735CE5023d1E99Ee3170c83218269A108c0112a'
);

export default instance;
