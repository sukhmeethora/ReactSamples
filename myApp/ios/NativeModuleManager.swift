//
//  NativeModuleManager.swift
//  myApp
//
//  Created by SukhmeetSingh Hora on 16/01/22.
//

// NativeModuleManager.swift

@objc (NativeModuleManager)
class NativeModuleManager : NSObject {

// Calling a routine & exporting static data
@objc
func constantsToExport() -> [AnyHashable : Any]! {
    return [
        "number": 70.0,
        "string": "hello from static data",
        "bool": true,
    ]
}

// Just calling a routing
@objc
func doSomethingInNative() {
    print("Hi, I'm written in Native code, and being consumed in react-native code.")
}

// Calling a routine & get response back
@objc
func doSomethingGiveBack(_ callback: RCTResponseSenderBlock) {
    callback(["Hi, I'm written in Native code, and being consumed in react-native code."])
}

}

