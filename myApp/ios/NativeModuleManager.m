//
//  NativeModuleManager.m
//  myApp
//
//  Created by SukhmeetSingh Hora on 16/01/22.
//
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(NativeModuleManager, NSObject)

RCT_EXTERN_METHOD(doSomethingInNative)
RCT_EXTERN_METHOD(doSomethingGiveBack: (RCTResponseSenderBlock)callback)
+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

@end
