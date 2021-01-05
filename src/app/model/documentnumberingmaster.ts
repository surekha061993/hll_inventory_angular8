import { FinancialYearMaster } from './financialyearmaster';

export class DocumentNumberingMaster{

	docNumId:number
	docSeries:string
	docNo:number;
	document=new Document;
	docPrefix:string;
	docSuffix:string
	year=new FinancialYearMaster;
	docDeleteFlag:number;
	docUpdateDate:Date;
}