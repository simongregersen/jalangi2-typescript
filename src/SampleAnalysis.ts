import { JalangiAnalysis, Jalangi } from "./Jalangi";

declare var J$: Jalangi;

class SampleAnalysis implements JalangiAnalysis {

  invokeFunPre(iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {
    return { f, base, args, skip: false };
  }

  invokeFun(iid, f, base, args, result, isConstructor, isMethod, functionIid, functionSid) {
    return { result };
  }

  literal(iid, val, hasGetterSetter) {
    return { result: val };
  }

  forinObject(iid, val) {
    return { result: val };
  }

  declare(iid, name, val, isArgument, argumentIndex, isCatchParam) {
  }

  getFieldPre(iid, base, offset, isComputed, isOpAssign, isMethodCall) {
    return { base, offset, skip: false };
  }

  getField(iid, base, offset, val, isComputed, isOpAssign, isMethodCall) {
    return { result: val };
  }

  putFieldPre(iid, base, offset, val, isComputed, isOpAssign) {
    return { base, offset, val, skip: false };
  }

  putField(iid, base, offset, val, isComputed, isOpAssign) {
    return { result: val };
  }

  read(iid, name, val, isGlobal, isScriptLocal) {
    return { result: val };
  }

  write(iid, name, val, lhs, isGlobal, isScriptLocal) {
    return { result: val };
  }

  _return(iid, val) {
    return { result: val };
  }

  _throw(iid, val) {
    return { result: val };
  }

  _with(iid, val) {
    return { result: val };
  }

  functionEnter(iid, f, dis, args) {
  }

  functionExit(iid, returnVal, wrappedExceptionVal) {
  }

  scriptEnter(iid, instrumentedFileName, originalFileName) {
  }

  scriptExit(iid, wrappedExceptionVal) {
  }

  binaryPre(iid, op, left, right, isOpAssign, isSwitchCaseComparison, isComputed) {
    return { op, left, right, skip: false };
  }

  binary(iid, op, left, right, result, isOpAssign, isSwitchCaseComparison, isComputed) {
    return { result };
  }

  unaryPre(iid, op, left) {
    return { op, left, skip: false };
  }

  unary(iid, op, left, result) {
    return { result };
  }

  conditional(iid, result) {
    return { result };
  }

  instrumentCodePre(iid, code, isDirect) {
    return { code, skip: false };
  }

  instrumentCode(iid, newCode, newAst, isDirect) {
    return { result: newCode };
  }

  endExpression(iid) {
  }

  endExecution() {
    console.log("SampleAnalysis finished");
  }

  runInstrumentedFunctionBody(iid, f, functionIid, functionSid) {
    return false;
  }

  onReady(cb) {
    cb();
  }

}

J$.analysis = new SampleAnalysis();
