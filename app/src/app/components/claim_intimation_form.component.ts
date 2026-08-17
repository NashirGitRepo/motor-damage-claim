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
      bh = this.sd_yT6rnZXFFNl3M5ml(bh);
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
      bh = this.sd_0MAEKkKdzwhSv3bL(bh);
      //appendnew_next_submitBtnClick
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_J96OZqIux1xO8U0e');
    }
  }
  //appendnew_flow_claim_intimation_formComponent_start

  sd_yT6rnZXFFNl3M5ml(bh) {
    try {
      const page = this.page;
      page.showContent = false;
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
      page.policyNumberError = null;

      if (!page.policyNumber || page.policyNumber.trim().length === 0) {
        reloadForm();
        page.policyNumberError = 'Policy Number is required';
        return;
      } else if (!/^MTR-\d{8}$/.test(page.policyNumber.trim())) {
        reloadForm();
        page.policyNumberError =
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
      bh = this.sd_cBhhsmxFIDP0hbY6(bh);
      //appendnew_next_fetchPolicyGetRequestInBlock
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_X7INKMj0nHHGPBl5');
    }
  }

  sd_cBhhsmxFIDP0hbY6(bh) {
    try {
      const page = this.page;
      let result = bh.local.result;
      console.log('=========', result);
      if (result && result.length > 0) {
        page.customerName = result[0].customer_name;
        page.registrationNumber = result[0].vehicle_reg;
        page.vehicleType = result[0].vehicle_type;
        page.price = result[0].idv;

        page.showContent = true;
      } else {
        alert('Policy Id: ' + page.policyNumber + " doesn't exist");
        window.location.reload();
      }
      //appendnew_next_sd_cBhhsmxFIDP0hbY6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cBhhsmxFIDP0hbY6');
    }
  }

  sd_0MAEKkKdzwhSv3bL(bh) {
    try {
      const page = this.page; // Validation Check
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
      bh = this.sd_0bqkCP4Lfzd1QZLB(bh);
      //appendnew_next_sd_0MAEKkKdzwhSv3bL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0MAEKkKdzwhSv3bL');
    }
  }

  async sd_0bqkCP4Lfzd1QZLB(bh) {
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
      bh = this.reelCall(bh);
      //appendnew_next_sd_0bqkCP4Lfzd1QZLB
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0bqkCP4Lfzd1QZLB');
    }
  }

  reelCall(bh) {
    try {
      const page = this.page;
      console.log('Claim Saved Response:', page.result);

      bh.local.reelsUrl =
        'https://reels-pt.neutrinos-apps.com/integration/api/runtime/sync';
      bh.local.reelsBody = {
        workflowId: 'ad335583-3836-4023-ba6e-e7fabe56a980',
        version: '1.0.0',
        inputObj: {
          idv: Number(page.price),
          Loss_Code: page.lossType,
          Part_Group_Code: page.damageGroup,
          'garage Type': page.garageType,
          estimatedPartsCost: String(page.estimatedPartsCost),
        },
      };
      console.log('reel body ', bh.local.reelsBody);
      bh = this.sd_Z8JL80A17cHo3OFZ(bh);
      //appendnew_next_reelCall
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gmbjd7k6O04eokGw');
    }
  }

  async sd_Z8JL80A17cHo3OFZ(bh) {
    try {
      let requestOptions = {
        url: bh.local.reelsUrl,
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
            'eb804c7f-993e-4387-9a4a-95b979fef9e6.2bdadd9bbdb1781eedaf6a5fee0c625533fb8029903aa0a7d27feac2551c0342',
        },
        params: {},
        body: bh.local.reelsBody,
      };
      bh.local.reelResponse = await this.sdService.nHttpRequest(requestOptions);
      bh = this.sd_4Zj3HM90EmhXvpCI(bh);
      //appendnew_next_sd_Z8JL80A17cHo3OFZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Z8JL80A17cHo3OFZ');
    }
  }

  sd_4Zj3HM90EmhXvpCI(bh) {
    try {
      const page = this.page;
      console.log('Submit btn result---->', page.result);

      console.log('reel response', bh.local.reelResponse);
      // Response data safely extract karein
      const resultData = bh.local.reelResponse?.result || {};

      // UI Object initialize karein (agar page.result pehle se object na ho)
      page.result = page.result || {};

      // netPayable extract aur assign (with fallback to 0)
      page.result.netPayable = resultData.netPayable ?? 0;

      // Agar direct UI binding (page.netPayable) use kar rahe hain toh:
      page.netPayable = page.result.netPayable;

      console.log('Assigned Net Payable:', page.result.netPayable);

      bh = this.bpmCall(bh);
      //appendnew_next_sd_4Zj3HM90EmhXvpCI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4Zj3HM90EmhXvpCI');
    }
  }

  bpmCall(bh) {
    try {
      const page = this.page; // 1. Target Endpoint URL
      bh.local.caseUrl =
        'https://alpha-pt.neutrinos-apps.com/caseservice/case/instance/create?branch=main';

      // 2. Request Headers (as shown in Postman)
      // bh.local.headers = {
      //     "accept": "application/json",
      //     "Content-Type": "application/json",
      //     "Authorization": "Bearer nqHeehdeVmv4_iv6JwN8xWiYSiCSiDoZg8il90OcUaN"
      // };

      // 3. Request Payload (Body)
      bh.local.caseBody = {
        caseType: 'motor-damage-claim',
        caseData: {
          claim_id: bh.local.claimId,
        },
        wfData: {
          claim_id: bh.local.claimId,
          netPayable: Number(page.netPayable),
        },
      };

      // Debug Log
      console.log('Case Service Payload:', bh.local.caseBody);
      bh = this.sd_eYDssfNFPohmMifq(bh);
      //appendnew_next_bpmCall
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0f7uORy7tzBonnkv');
    }
  }

  async sd_eYDssfNFPohmMifq(bh) {
    try {
      let requestOptions = {
        url: bh.local.caseUrl,
        method: 'post',
        responseType: 'json',
        headers: {
          Cookie:
            'asid=s%3AgCHIeYCl7AW1V2UukFLU-y7L9-BQLjbj.p21neqFfhl3QT%2F9SoM8e3DIEanU1e%2BHaakbQkQnGWgE',
          'Postman-Token': '<calculated when request is sent>',
          'Content-Length': '<calculated when request is sent>',
          Host: '<calculated when request is sent>',
          'User-Agent': 'PostmanRuntime/7.56.0',
          Accept: 'application/json',
          'Accept-Encoding': 'gzip, deflate, br',
          Connection: 'keep-alive',
          'Content-Type': 'application/json',
          Authorization: ' Bearer nqHeehdeVmv4_iv6JwN8xWiYSiCSiDoZg8il90OcUaN',
        },
        params: {},
        body: bh.local.caseBody,
      };
      bh.local.caseResponse = await this.sdService.nHttpRequest(requestOptions);
      bh = this.openSuccessDialog(bh);
      //appendnew_next_sd_eYDssfNFPohmMifq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eYDssfNFPohmMifq');
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
    throw e;
  }
  //appendnew_flow_claim_intimation_formComponent_Catch
}
