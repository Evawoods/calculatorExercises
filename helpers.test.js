describe('Helpers test (with setup and tear down', function() {
    beforeEach(function() {
        billAmtInput.value = 20;
        tipAmtInput.value = 4;
        submitPaymentInfo();
    });

    it('should sum total tip amt of all payments on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(4);

        billAmtInput.value = 40;
        tipAmtInput.value = 8;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(12);
    });

    it('should sum total bill amt of all payments on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(20);

        billAmtInput.value = 40;
        tipAmtInput.value = 8;
        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(60);
    });

    it('should sum total tip % of all payments on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);

        billAmtInput.value = 40;
        tipAmtInput.value = 8;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });

    it('should sum tip % of a single tip on calculateTipPercent()', function() {
        expect(calculateTipPercent(20, 4)).toEqual(20);
        expect(calculateTipPercent(76, 24)).toEqual(32);
    });

    it('should create a new td from value and append to tr on appendTd(tr, value)', function() {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'test');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });

    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function(){
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTMl = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});