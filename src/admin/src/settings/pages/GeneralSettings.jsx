import {
    Button,
    Card,
    CardBody,
    CardHeader,
    __experimentalSpacer as Spacer,
    Notice,
    Animate,
    TextControl,
} from "@wordpress/components";
import {useContext, useEffect} from '@wordpress/element';
import {SettingsContext} from "../context/SettingsContext";

const {__} = wp.i18n;

function GeneralSettings() {
    const {settings, updateSetting, saveSettings, settingsSaved, setSettingsSaved} = useContext(SettingsContext);

    const setSavingSettings = () => {
        saveSettings();
        setSettingsSaved(true);

        setTimeout(function () {
            setSettingsSaved(false);
        }, 2000);
    }

    useEffect(() => {

    }, [settings]);

    return (<div className={"inner-settings"}>
        <Card>
            <CardHeader>
                {__('Some Card', 'simply-static')}
            </CardHeader>
            <CardBody>
                <p>{__('Something cool to configure!', 'simply-static')}</p>
                <TextControl
                    label={__('Headline', 'simply-static')}
                    help={__('Mindblowing.', 'simply-static')}
                    value={settings.headline}
                    onChange={(value) => {
                        updateSetting("headline", value);
                    }}
                />
            </CardBody>
        </Card>
        <Spacer margin={5}/>
        {settingsSaved &&
            <Animate type="slide-in" options={{origin: 'top'}}>
                {() => (
                    <Notice status="success" isDismissible={false}>
                        <p>
                            {__('Settings saved successfully.', 'simply-static')}
                        </p>
                    </Notice>
                )}
            </Animate>
        }
        <div className={"save-settings"}>
            <Button onClick={setSavingSettings}
                    variant="primary">{__('Save Settings', 'simply-static')}</Button>
        </div>
    </div>)
}

export default GeneralSettings;