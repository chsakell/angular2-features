"use strict";
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
/**
 * Components helper class to easily work with
 * allows to:
 * - get application root view container ref
 */
var ComponentsHelper = (function () {
    function ComponentsHelper(applicationRef, componentFactoryResolver, injector) {
        this.applicationRef = applicationRef;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
    }
    ComponentsHelper.prototype.getDocument = function () {
        return this.injector.get(platform_browser_1.DOCUMENT);
    };
    /**
     * In some cases, like using ngUpgrate,
     * you need to explicitly set view container ref
     * to made this method working you need to add:
     * ```typescript
     *  @Component({
     *   selector: 'my-app',
     *   ...
     *   })
     *  export class MyApp {
     *    constructor(componentsHelper:ComponentsHelper, viewContainerRef: ViewContainerRef) {
     *        // A Default view container ref, usually the app root container ref.
     *        // Has to be set manually until we can find a way to get it automatically.
     *        componentsHelper.setRootViewContainerRef(viewContainerRef)
     *      }
     *  }
     * ```
     */
    ComponentsHelper.prototype.setRootViewContainerRef = function (value) {
        this.root = value;
    };
    /**
     * This is a name conventional class to get application root view component ref
     * @returns {ViewContainerRef} - application root view component ref
     */
    ComponentsHelper.prototype.getRootViewContainerRef = function () {
        // https://github.com/angular/angular/issues/9293
        if (this.root) {
            return this.root;
        }
        var comps = this.applicationRef.components;
        if (!comps.length) {
            throw new Error("ApplicationRef instance not found");
        }
        try {
            /* one more ugly hack, read issue above for details */
            var rootComponent = this.applicationRef._rootComponents[0];
            this.root = rootComponent._hostElement.vcRef;
            return this.root;
        }
        catch (e) {
            throw new Error("ApplicationRef instance not found");
        }
    };
    /**
     * Creates an instance of a Component and attaches it to the View Container found at the
     * `location` specified as {@link ViewContainerRef}.
     *
     * You can optionally provide `providers` to configure the {@link Injector} provisioned for this
     * Component Instance.
     *
     * Returns {@link ComponentRef} representing the newly created Component.
     * @param ComponentClass - @Component class
     * @param location - reference to the location
     * @param providers - optional array of providers
     * @returns {ComponentRef<T>} - returns ComponentRef<T>
     */
    ComponentsHelper.prototype.appendNextToLocation = function (ComponentClass, location, providers) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(ComponentClass);
        var parentInjector = location.parentInjector;
        var childInjector = parentInjector;
        if (providers && providers.length > 0) {
            childInjector = core_1.ReflectiveInjector.fromResolvedProviders(providers, parentInjector);
        }
        return location.createComponent(componentFactory, location.length, childInjector);
    };
    /**
     * Helper methods to add ComponentClass(like modal backdrop) with options
     * of type ComponentOptionsClass to element next to application root
     * or next to provided instance of view container
     * @param ComponentClass - @Component class
     * @param ComponentOptionsClass - options class
     * @param options - instance of options
     * @returns {ComponentRef<T>} - returns ComponentRef<T>
     */
    ComponentsHelper.prototype.appendNextToRoot = function (ComponentClass, ComponentOptionsClass, options) {
        var location = this.getRootViewContainerRef();
        var providers = core_1.ReflectiveInjector.resolve([
            { provide: ComponentOptionsClass, useValue: options }
        ]);
        return this.appendNextToLocation(ComponentClass, location, providers);
    };
    ComponentsHelper.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ComponentsHelper.ctorParameters = [
        { type: core_1.ApplicationRef, },
        { type: core_1.ComponentFactoryResolver, },
        { type: core_1.Injector, },
    ];
    return ComponentsHelper;
}());
exports.ComponentsHelper = ComponentsHelper;
