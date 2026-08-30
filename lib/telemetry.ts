export type SyntheticCookieEntry = {
    name: string;
    value: string;
    domain: string;
    path: string;
    secure: boolean;
    httpOnly: boolean;
    sameSite: 'Lax' | 'Strict' | 'None';
    expiresAt: string;
};

export type LocalStorageEntry = {
    key: string;
    value: string;
    accessedAt: string;
};

export type TelemetryLocation = {
    source: 'geolocation' | 'not_collected';
    latitude?: number;
    longitude?: number;
    accuracy?: number;
    city?: string;
    region?: string;
    country?: string;
};

export type TelemetryConsent = {
    telemetryCollection: boolean;
    locationCollection: boolean;
};

export type BrowserTelemetry = {
    consent: TelemetryConsent;
    generatedAt: string;
    ipAddress: {
        address: string | null;
        source: 'request_header' | 'browser' | 'not_collected';
    };
    location: TelemetryLocation;
    time: {
        capturedAt: string;
        timezoneOffsetMinutes: number;
        localDateTime: string;
        utcDateTime: string;
    };
    browser: {
        name: string;
        version: string;
        language: string;
        platform: string;
        online: boolean;
        userAgent: string;
    };
    device: {
        screenWidth: number;
        screenHeight: number;
        colorDepth: number;
        viewportWidth: number;
        viewportHeight: number;
        pixelRatio: number;
    };
    page: {
        url: string;
        path: string;
        referrer: string;
    };
    timing: {
        timestamp: string;
        timezoneOffsetMinutes: number;
    };
    cookies: SyntheticCookieEntry[];
    localStorage: LocalStorageEntry[];
};

export const AUTHORIZED_LOCAL_STORAGE_KEYS = ['hrvc_theme', 'hrvc_analytics_consent', 'hrvc_last_page'];

export function getAuthorizedLocalStorageEntries(): LocalStorageEntry[] {
    if (typeof window === 'undefined' || !('localStorage' in window)) {
        return [];
    }

    const accessedAt = new Date().toISOString();

    return AUTHORIZED_LOCAL_STORAGE_KEYS.flatMap((key) => {
        try {
            const value = window.localStorage.getItem(key);
            if (value === null) return [];
            return [{ key, value: value.slice(0, 256), accessedAt }];
        } catch {
            return [];
        }
    });
}

export function createSyntheticCookieDataset(): SyntheticCookieEntry[] {
    const now = new Date();
    const expiresAt = new Date(now.getTime() + 1000 * 60 * 60 * 24 * 365).toISOString();

    return [
        {
            name: 'hrvc_synth_preferences',
            value: 'synthetic-ui-preferences-demo',
            domain: 'example.com',
            path: '/',
            secure: true,
            httpOnly: false,
            sameSite: 'Lax',
            expiresAt,
        },
        {
            name: 'hrvc_synth_session_state',
            value: 'synthetic-session-state-demo',
            domain: 'example.com',
            path: '/',
            secure: true,
            httpOnly: false,
            sameSite: 'Lax',
            expiresAt,
        },
        {
            name: 'hrvc_synth_analytics_state',
            value: 'synthetic-analytics-demo',
            domain: 'example.com',
            path: '/',
            secure: true,
            httpOnly: false,
            sameSite: 'Strict',
            expiresAt,
        },
    ];
}

function getBrowserName(userAgent: string): string {
    if (/EdgA?/i.test(userAgent)) return 'Microsoft Edge';
    if (/OPR\//i.test(userAgent)) return 'Opera';
    if (/Firefox\//i.test(userAgent)) return 'Firefox';
    if (/Chrome\//i.test(userAgent)) return 'Google Chrome';
    if (/Safari\//i.test(userAgent)) return 'Safari';
    return 'Unknown Browser';
}

function getBrowserVersion(userAgent: string): string {
    const match = userAgent.match(/(?:Edg|OPR|Firefox|Chrome|Safari)\/([^\s]+)/i);
    return match ? match[1] : 'unknown';
}

export function buildTelemetrySnapshot(
    consentLocation: boolean,
    telemetryEnabled = true,
    options?: {
        location?: TelemetryLocation;
        ipAddress?: string | null;
        localStorageEntries?: LocalStorageEntry[];
    }
): BrowserTelemetry {
    const timestamp = new Date();
    const localStorageEntries = options?.localStorageEntries ?? [];
    const location = options?.location ?? { source: 'not_collected' };
    const ipAddress = options?.ipAddress ?? null;

    const baseTelemetry: BrowserTelemetry = {
        consent: {
            telemetryCollection: telemetryEnabled,
            locationCollection: consentLocation,
        },
        generatedAt: timestamp.toISOString(),
        ipAddress: {
            address: ipAddress,
            source: ipAddress ? 'browser' : 'not_collected',
        },
        location,
        time: {
            capturedAt: timestamp.toISOString(),
            timezoneOffsetMinutes: timestamp.getTimezoneOffset(),
            localDateTime: timestamp.toLocaleString(),
            utcDateTime: timestamp.toISOString(),
        },
        browser: {
            name: 'not_collected',
            version: 'n/a',
            language: 'en-US',
            platform: 'not_collected',
            online: true,
            userAgent: 'synthetic-user-agent',
        },
        device: {
            screenWidth: 0,
            screenHeight: 0,
            colorDepth: 0,
            viewportWidth: 0,
            viewportHeight: 0,
            pixelRatio: 1,
        },
        page: {
            url: 'https://example.com',
            path: '/',
            referrer: 'direct',
        },
        timing: {
            timestamp: timestamp.toISOString(),
            timezoneOffsetMinutes: timestamp.getTimezoneOffset(),
        },
        cookies: createSyntheticCookieDataset(),
        localStorage: localStorageEntries,
    };

    if (!telemetryEnabled) {
        return {
            ...baseTelemetry,
            consent: {
                telemetryCollection: false,
                locationCollection: false,
            },
            ipAddress: { address: null, source: 'not_collected' },
            location: { source: 'not_collected' },
            localStorage: [],
        };
    }

    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        return baseTelemetry;
    }

    const userAgent = navigator.userAgent || 'synthetic-user-agent';
    const screen = window.screen;

    return {
        ...baseTelemetry,
        consent: {
            telemetryCollection: true,
            locationCollection: consentLocation,
        },
        browser: {
            name: getBrowserName(userAgent),
            version: getBrowserVersion(userAgent),
            language: navigator.language || 'en-US',
            platform: navigator.platform || 'unknown',
            online: navigator.onLine,
            userAgent,
        },
        device: {
            screenWidth: screen?.width ?? 0,
            screenHeight: screen?.height ?? 0,
            colorDepth: screen?.colorDepth ?? 0,
            viewportWidth: window.innerWidth ?? 0,
            viewportHeight: window.innerHeight ?? 0,
            pixelRatio: window.devicePixelRatio ?? 1,
        },
        page: {
            url: window.location.href,
            path: window.location.pathname,
            referrer: document.referrer || 'direct',
        },
        timing: {
            timestamp: timestamp.toISOString(),
            timezoneOffsetMinutes: timestamp.getTimezoneOffset(),
        },
        localStorage: localStorageEntries,
    };
}
