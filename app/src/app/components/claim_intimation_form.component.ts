// _neu_generated_code__dont_modify_directly_
/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Component, Injector } from '@angular/core'; //_splitter_
import { FormBuilder } from '@angular/forms'; //_splitter_
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { SuccessPageComponent } from 'app/components/SuccessPage.component'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { NeuServiceInvokerService } from 'app/n-services/service-caller.service'; //_splitter_
import { NeutrinosOAuthClientService } from 'neutrinos-oauth-client'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-claim_intimation_form',
  templateUrl: './claim_intimation_form.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class claim_intimation_formComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: NeuServiceInvokerService
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_08aEHOpNqX0gjp5R(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_08aEHOpNqX0gjp5R(bh) {
    try {
      bh = this.sd_avKP1Ku3TKd5gMMD(bh);
      //appendnew_next_sd_08aEHOpNqX0gjp5R
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_08aEHOpNqX0gjp5R');
    }
  }

  fetchPolicyDetails(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_VLLBbpobJg2qW8VV(bh);
      //appendnew_next_fetchPolicyDetails
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MaQaBlzNWJ1vQxuL');
    }
  }

  submitBtnClick(...others) {
    let bh: any = {};
    try {
      bh = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.reelCall(bh);
      //appendnew_next_submitBtnClick
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_J96OZqIux1xO8U0e');
    }
  }
  //appendnew_flow_claim_intimation_formComponent_start

  sd_avKP1Ku3TKd5gMMD(bh) {
    try {
      this.page.noc = this.__page_injector__.get(NeutrinosOAuthClientService);
      bh = this.sd_z32FIUzZS57J5mvA(bh);
      //appendnew_next_sd_avKP1Ku3TKd5gMMD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_avKP1Ku3TKd5gMMD');
    }
  }

  async sd_z32FIUzZS57J5mvA(bh) {
    try {
      const page = this.page;
      if (!page.noc.isLoggedIn) {
        await page.noc.login('intimationform');
      }
      bh = this.sd_yT6rnZXFFNl3M5ml(bh);
      //appendnew_next_sd_z32FIUzZS57J5mvA
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_z32FIUzZS57J5mvA');
    }
  }

  sd_yT6rnZXFFNl3M5ml(bh) {
    try {
      const page = this.page;
      page.showContent = false;
      page.today = new Date();
      console.log('page today date ------>', page.today);
      console.log(page.showContent);
      bh.local.lossCodeUrl =
        'https://reels-pt.neutrinos-apps.com/integration/api/records/filter/72b58c39-817f-4204-95dc-4f5eec8fd929/478c89b8-36bb-4fbe-96c5-1292a8054a2b/6f081239-f031-47e0-a9fd-6a5c1c75c4b9';
      bh.local.requestBody = {
        pageNumber: 0,
        pageSize: 100,
        filter: {},
      };
      bh = this.sd_Wr9Ho0vseyisXZHa(bh);
      //appendnew_next_sd_yT6rnZXFFNl3M5ml
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_yT6rnZXFFNl3M5ml');
    }
  }

  async sd_Wr9Ho0vseyisXZHa(bh) {
    try {
      let requestOptions = {
        url: bh.local.lossCodeUrl,
        method: 'post',
        responseType: 'json',
        headers: {
          Cookie:
            'asid=s%3AgCHIeYCl7AW1V2UukFLU-y7L9-BQLjbj.p21neqFfhl3QT%2F9SoM8e3DIEanU1e%2BHaakbQkQnGWgE',
          'Postman-Token': '<calculated when request is sent>',
          'Content-Length': '<calculated when request is sent>',
          Host: '<calculated when request is sent>',
          'User-Agent': 'PostmanRuntime/7.56.0',
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          Connection: 'keep-alive',
          'Content-Type': 'application/json',
          token:
            '50654d3e-2224-4755-95ad-996052c1c67a.8f42fcfb3b070b965115764405991ab0b458314338b79ba102b436e78fc92bc3',
        },
        params: {},
        body: bh.local.requestBody,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_0PAYztpMzag6eRiT(bh);
      //appendnew_next_sd_Wr9Ho0vseyisXZHa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Wr9Ho0vseyisXZHa');
    }
  }

  sd_0PAYztpMzag6eRiT(bh) {
    try {
      const page = this.page;
      console.log('result=========>', bh.local.result);

      page.lossTypeRecords = bh.local.result?.records || [];
      bh = this.sd_YdSEN5cNt9Nb4OaH(bh);
      //appendnew_next_sd_0PAYztpMzag6eRiT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0PAYztpMzag6eRiT');
    }
  }

  sd_YdSEN5cNt9Nb4OaH(bh) {
    try {
      const page = this.page;
      bh.local.partGroupUrl =
        'https://reels-pt.neutrinos-apps.com/integration/api/records/filter/72b58c39-817f-4204-95dc-4f5eec8fd929/ae5e2b99-23c4-4ef5-b953-0d63a8e220df/63a1af97-18b4-4af1-b238-b35b0baf44ce';
      bh.local.requestBodyForPartGroup = {
        pageNumber: 0,
        pageSize: 100,
        filter: {},
      };
      bh = this.sd_Ut2s5rmDrq4xCc39(bh);
      //appendnew_next_sd_YdSEN5cNt9Nb4OaH
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YdSEN5cNt9Nb4OaH');
    }
  }

  async sd_Ut2s5rmDrq4xCc39(bh) {
    try {
      let requestOptions = {
        url: bh.local.partGroupUrl,
        method: 'post',
        responseType: 'json',
        headers: {
          Cookie:
            'asid=s%3AgCHIeYCl7AW1V2UukFLU-y7L9-BQLjbj.p21neqFfhl3QT%2F9SoM8e3DIEanU1e%2BHaakbQkQnGWgE',
          'Postman-Token': '<calculated when request is sent>',
          'Content-Length': '<calculated when request is sent>',
          Host: '<calculated when request is sent>',
          'User-Agent': 'PostmanRuntime/7.56.0',
          Accept: '*/*',
          'Accept-Encoding': 'gzip, deflate, br',
          Connection: 'keep-alive',
          'Content-Type': 'application/json',
          token:
            '50654d3e-2224-4755-95ad-996052c1c67a.8f42fcfb3b070b965115764405991ab0b458314338b79ba102b436e78fc92bc3',
        },
        params: {},
        body: bh.local.requestBodyForPartGroup,
      };
      bh.local.resultForPartGroup = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.sd_EMVaGfg9UubCkEXt(bh);
      //appendnew_next_sd_Ut2s5rmDrq4xCc39
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Ut2s5rmDrq4xCc39');
    }
  }

  sd_EMVaGfg9UubCkEXt(bh) {
    try {
      const page = this.page;
      console.log('result data PArt=========>', bh.local.resultForPartGroup);

      page.partGroup = bh.local.resultForPartGroup?.records || [];
      bh = this.sd_kXKGLk1w37hPFONv(bh);
      //appendnew_next_sd_EMVaGfg9UubCkEXt
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EMVaGfg9UubCkEXt');
    }
  }

  sd_kXKGLk1w37hPFONv(bh) {
    try {
      //appendnew_next_sd_kXKGLk1w37hPFONv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_kXKGLk1w37hPFONv');
    }
  }

  sd_VLLBbpobJg2qW8VV(bh) {
    try {
      const page = this.page;
      page.policyError = null;

      if (!page.policyNumber || page.policyNumber.trim().length === 0) {
        reloadForm();
        page.policyError = 'Policy Number is required';
        return;
      } else if (!/^MTR-\d{8}$/.test(page.policyNumber.trim())) {
        reloadForm();
        page.policyError =
          'Please enter a valid MTR Number (e.g. MTR-12345678)';
        return;
      }

      function reloadForm() {
        page.customerName = null;
        page.registrationNumber = null;
        page.vehicleType = null;
        page.price = null;
      }
      bh = this.sd_8YTzBzIAi4lx9NVa(bh);
      //appendnew_next_sd_VLLBbpobJg2qW8VV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VLLBbpobJg2qW8VV');
    }
  }

  sd_8YTzBzIAi4lx9NVa(bh) {
    try {
      const page = this.page;
      let policyNumber = page.policyNumber;
      console.log(
        `https://motordamageclaimbackend.neutrinos-apps.com/api/policy/${policyNumber}`
      );
      bh.local.url = `https://motordamageclaimbackend.neutrinos-apps.com/api/policy/${policyNumber}`;

      page.policyNumberError = null;
      bh = this.fetchPolicyGetRequestInBlock(bh);
      //appendnew_next_sd_8YTzBzIAi4lx9NVa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_8YTzBzIAi4lx9NVa');
    }
  }

  async fetchPolicyGetRequestInBlock(bh) {
    try {
      let requestOptions = {
        url: bh.local.url,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.responseFromPolicyFetch(bh);
      //appendnew_next_fetchPolicyGetRequestInBlock
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X7INKMj0nHHGPBl5');
    }
  }

  responseFromPolicyFetch(bh) {
    try {
      const page = this.page;
      // let result=bh.local.result
      // console.log("=========",result);
      // if(result && result.length>0){
      //     page.customerName = result[0].customer_name;
      //     page.registrationNumber = result[0].vehicle_reg;
      //     page.vehicleType = result[0].vehicle_type;
      //     page.price = result[0].idv;

      //     page.showContent = true;
      // }
      // else{
      //    alert("Policy Id: " + page.policyNumber + " doesn't exist");
      //    window.location.reload();
      // }
      let result = bh.local.result;

      console.log('Backend Result========>:', result);

      // Case 1: Backend se Error Object aaya { "error": "Policy Not Found" }
      if (result && result.error) {
        alert(`Policy Id: ${page.policyNumber} - ${result.error}`);
        page.showContent = false;
        page.errorMessage = result.error;
      }
      // Case 2: Direct Success Array aaya [{ customer_name: '...', ... }]
      else if (Array.isArray(result) && result.length > 0) {
        page.customerName = result[0].customer_name;
        page.registrationNumber = result[0].vehicle_reg;
        page.vehicleType = result[0].vehicle_type;
        page.price = result[0].idv;

        page.showContent = true;
        page.errorMessage = '';
      }
      // Case 3: Success Object aaya jiske andar data array/object hai
      else if (result && result.data) {
        let data = Array.isArray(result.data) ? result.data[0] : result.data;

        page.customerName = data.customer_name || data.customerName;
        page.registrationNumber = data.vehicle_reg || data.registrationNumber;
        page.vehicleType = data.vehicle_type || data.vehicleType;
        page.price = data.idv || data.price;

        page.showContent = true;
        page.errorMessage = '';
      }
      // Case 4: Empty Result ya Unknown Object
      else {
        alert(`Policy Id: ${page.policyNumber} doesn't exist`);
        page.showContent = false;
        page.errorMessage = 'Policy details not found';
      }
      //appendnew_next_responseFromPolicyFetch
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cBhhsmxFIDP0hbY6');
    }
  }

  reelCall(bh) {
    try {
      const page = this.page; // console.log("Claim Saved Response:", page.result);

      // bh.local.reelsUrl = "https://reels-pt.neutrinos-apps.com/integration/api/runtime/sync";
      // bh.local.reelsBody = {
      //     "workflowId": "ad335583-3836-4023-ba6e-e7fabe56a980",
      //     "version": "1.0.0",
      //     "inputObj": {
      //         "idv": Number(page.price),
      //         "Loss_Code": page.lossType,
      //         "Part_Group_Code": page.damageGroup,
      //         "garage Type": page.garageType,
      //         "estimatedPartsCost": String(page.estimatedPartsCost)
      //     }
      // };
      // console.log("reel body ",bh.local.reelsBody);
      bh = this.sd_zFak7feHHmQvqCbl(bh);
      //appendnew_next_reelCall
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gmbjd7k6O04eokGw');
    }
  }

  sd_zFak7feHHmQvqCbl(bh) {
    try {
      const page = this.page; // Validation Check
      //const resultData = bh.local.reelResponse?.result || {};

      // UI Object initialize karein (agar page.result pehle se object na ho)
      //page.result = page.result || {};

      // netPayable extract aur assign (with fallback to 0)
      //page.result.netPayable = resultData.netPayable ?? 0;

      // Agar direct UI binding (page.netPayable) use kar rahe hain toh:
      //page.netPayable = page.result.netPayable;
      //console.log("netpayable=======>",page.netPayable);
      page.dateofLossError = !page.dateofLoss
        ? 'Date of Loss is required'
        : null;
      page.lossTypeError = !page.lossType ? 'Loss Type is required' : null;
      page.damageGroupError = !page.damageGroup
        ? 'Damage Group is required'
        : null;
      page.estimatedPartsCostError = !page.estimatedPartsCost
        ? 'Estimated Parts Cost is required'
        : null;
      page.garageTypeError = !page.garageType
        ? 'Garage Type is required'
        : null;
      page.descriptionError = !page.description
        ? 'Description is required'
        : null;

      if (
        page.policyNumberError ||
        page.customerNameError ||
        page.registrationNumberError ||
        page.vehicleTypeError ||
        page.priceError ||
        page.dateofLossError ||
        page.lossTypeError ||
        page.damageGroupError ||
        page.estimatedPartsCostError ||
        page.garageTypeError ||
        page.descriptionError
      ) {
        return;
      }

      console.log('yaha s');

      // 1. Unique Claim ID Generation
      const now = new Date();
      const date =
        now.getFullYear().toString() +
        String(now.getMonth() + 1).padStart(2, '0') +
        String(now.getDate()).padStart(2, '0');

      const random = Math.floor(Math.random() * 99999)
        .toString()
        .padStart(5, '0');

      console.log(`CLM-${date}-${random}`);
      bh.local.claimId = `CLM-${date}-${random}`;
      page.claimId = bh.local.claimId; // UI display

      // 2. Save Claim Payload (Space typo fixed in loss_description)
      bh.local.claimUrl =
        'https://motordamageclaimbackend.neutrinos-apps.com/api/claim';
      //bh.local.claimUrl ="http://localhost:8081/api/claim";
      bh.local.claimBody = {
        claim_id: bh.local.claimId,
        policy_no: page.policyNumber || '',
        'Customer Name': page.customerName || '',
        'Registration Number': page.registrationNumber || '',
        'Vehicle Type': page.vehicleType || '',
        IDV: Number(page.price) || 0,
        date_of_loss: page.dateofLoss || '',
        loss_code: page.lossType || '',
        part_group_code: page.damageGroup || '',
        estimated_parts_cost: String(page.estimatedPartsCost || 0),
        garage_type: page.garageType || '',
        fir_filed: Boolean(page.firFilled),
        valid_licence: Boolean(page.validDrivingLicense),
        loss_description: page.description || '',
      };

      console.log('body---', bh.local.claimBody);
      bh = this.sd_axumR5hFEsH9wfQS(bh);
      //appendnew_next_sd_zFak7feHHmQvqCbl
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_zFak7feHHmQvqCbl');
    }
  }

  async sd_axumR5hFEsH9wfQS(bh) {
    try {
      let requestOptions = {
        url: bh.local.claimUrl,
        method: 'post',
        responseType: 'json',
        headers: {},
        params: {},
        body: bh.local.claimBody,
      };
      this.page.result = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_4Zj3HM90EmhXvpCI(bh);
      //appendnew_next_sd_axumR5hFEsH9wfQS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_axumR5hFEsH9wfQS');
    }
  }

  sd_4Zj3HM90EmhXvpCI(bh) {
    try {
      const page = this.page;
      console.log('Submit btn result----><=================>', page.result);

      // console.log("reel response",bh.local.reelResponse);
      // // Response data safely extract karein
      // const resultData = bh.local.reelResponse?.result || {};

      // // UI Object initialize karein (agar page.result pehle se object na ho)
      // page.result = page.result || {};

      // // netPayable extract aur assign (with fallback to 0)
      // page.result.netPayable = resultData.netPayable ?? 0;

      // // Agar direct UI binding (page.netPayable) use kar rahe hain toh:
      // page.netPayable = page.result.netPayable;

      // console.log("Assigned Net Payable:", page.result.netPayable);
      // // 1. Token Endpoint URL
      // bh.local.tokenUrl = "https://ids-ctr-pt.neutrinos-apps.com/token";

      // // 2. Headers
      // bh.local.headers = {
      //     "Content-Type": "application/x-www-form-urlencoded",
      //     "Content-Length": "<calculated when request is sent>",
      //     "Host": "<calculated when request is sent>",
      //     "User-Agent": "PostmanRuntime/7.56.1",
      //     "Accept": "*/*",
      //     "Accept-Encoding": "gzip, deflate, br",
      //     "Connection": "keep-alive"
      // };

      // // 3. Body (x-www-form-urlencoded format)
      // const params = new URLSearchParams();
      // params.append("client_id", "0ddh_euTKkSA682Yy5HuC");
      // params.append("client_secret", "e28WZR6ZKyrYILTSKKClFEwNlYoGR2cvISwFCoIXP4S7DJgsaqhHRSNqpoWgYbcx_DUlrSkoA1zS5uFOzP-J9C"); // Replace with complete secret
      // params.append("grant_type", "client_credentials");

      // bh.local.tokenBody = params.toString();

      // // Debug Log
      // console.log("Token Request Body:", bh.local.tokenBody);

      bh = this.netPayableCall(bh);
      //appendnew_next_sd_4Zj3HM90EmhXvpCI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4Zj3HM90EmhXvpCI');
    }
  }

  netPayableCall(bh) {
    try {
      const page = this.page;
      bh.local.netPayableUrl =
        'https://motordamageclaimbackend.neutrinos-apps.com/api/findNetPayable/' +
        bh.local.claimId;
      bh = this.sd_FRlyE9oCDigQdiH5(bh);
      //appendnew_next_netPayableCall
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0f7uORy7tzBonnkv');
    }
  }

  async sd_FRlyE9oCDigQdiH5(bh) {
    try {
      let requestOptions = {
        url: bh.local.netPayableUrl,
        method: 'get',
        responseType: 'json',
        headers: {},
        params: {},
        body: undefined,
      };
      this.page.netPayableResponse = await this.sdService.nHttpRequest(
        requestOptions
      );
      bh = this.sd_NqAH0PwYIMI9DmGo(bh);
      //appendnew_next_sd_FRlyE9oCDigQdiH5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_FRlyE9oCDigQdiH5');
    }
  }

  sd_NqAH0PwYIMI9DmGo(bh) {
    try {
      const page = this.page; //console.log(" netPayableResponse=======================>>>>",page.netPayableResponse);
      bh = this.openSuccessDialog(bh);
      //appendnew_next_sd_NqAH0PwYIMI9DmGo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NqAH0PwYIMI9DmGo');
    }
  }

  openSuccessDialog(bh) {
    try {
      const SuccessPageDialog = this.__page_injector__.get(MatDialog);
      const SuccessPageDialogRef = SuccessPageDialog.open(
        SuccessPageComponent,
        { data: this.page.result }
      );

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EU76cENGxsPkR5Be');
    }
  }

  sd_1sAV9i3TFLZUdw4q(bh) {
    try {
      const page = this.page; // Catch Node bh.error object receive karta hai
      let errObj = bh.error?.error || bh.error;
      page.policyError = errObj?.error;
      console.log('Captured Error in Catch Node:======>', errObj?.error);

      let backendMsg = 'Policy details not found';

      // Error structure handling
      if (typeof errObj === 'string') {
        try {
          let parsed = JSON.parse(errObj);
          backendMsg = parsed.error || backendMsg;
        } catch (e) {
          backendMsg = errObj;
        }
      } else if (errObj && errObj.error) {
        backendMsg = errObj.error;
      } else if (errObj && errObj.message) {
        backendMsg = errObj.message;
      }

      // UI Alert and State Reset
      //alert(`Policy Id: ${page.policyNumber || ''} - ${backendMsg}`);

      page.showContent = false;
      page.errorMessage = backendMsg;
      page.customerName = '';
      page.registrationNumber = '';
      page.vehicleType = '';
      page.price = '';
      //appendnew_next_sd_1sAV9i3TFLZUdw4q
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1sAV9i3TFLZUdw4q');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  // error_handler_slot
  private errorHandler(bh, e, src): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false ||
      this.sd_Jw8eiccG9IUhXR1F(bh)
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  sd_Jw8eiccG9IUhXR1F(bh) {
    const nodes = ['sd_X7INKMj0nHHGPBl5', 'sd_cBhhsmxFIDP0hbY6'];
    if (nodes.includes(bh.errorSource)) {
      bh = this.sd_1sAV9i3TFLZUdw4q(bh);
      //appendnew_next_sd_Jw8eiccG9IUhXR1F
      return true;
    }
    return false;
  }
  //appendnew_flow_claim_intimation_formComponent_Catch
}
