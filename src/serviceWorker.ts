export { }

export interface ICampaign {
    id: number,
    name: string,
}

export interface ICampaignService {

    getCampaingns(): ICampaign[];
    
    getCampaingnById(id: number): ICampaign;

}


export class ProductService {

    constructor(private campaignService: ICampaignService) { }

}

export class CampaignService {

    getCampaingns(): ICampaign[] {
        throw new Error("Method not implemented.");
    }
    
    getCampaingnById(id: number): ICampaign {
        throw new Error("Method not implemented.");
    }

}

export const campaignService = new CampaignService();

export const productService = new ProductService(campaignService);
